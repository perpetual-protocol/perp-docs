---
id: referral-program-delegation
title: Referral Program Delegation Guide for Contracts
---

# Referral Program Delegation Guide for Contracts

In the new Referral Program, an account needs to lock **10 vePERP** to participate. However, since only EOAs can lock vePERP, if you’re using a contract as a referral partner or trader, your contract must **delegate** to an EOA (aka the beneficiary) which can lock vePERP on the contract’s behalf. When you claim rewards, the process is the same as before, the only difference is the rewarded vePERP will be distributed to the delegated EOA instead of the contract who owns the referral code or uses a referral code to trade.

N**o action is required if you’re using an EOA as a referral partner or trader. Only contracts need to delegate.**

## How to Delegate?

Your contract can delegate through our `vePERPReferralRewardDelegate` contract, and the address is `0x2dE8e18BDaef25C2DE0bED29C8B72E49261CA88d` on Optimism mainnet. You could also check the contract on [Etherscan.](https://optimistic.etherscan.io/address/0x2dE8e18BDaef25C2DE0bED29C8B72E49261CA88d) You could check out the source code on GitHub: [perpetual-protocol/voting-escrow](https://github.com/perpetual-protocol/voting-escrow/blob/main/contracts/RewardDelegate.sol).

Here is the interface of `vePERPReferralRewardDelegate`:

```solidity
interface IRewardDelegate {
    // should be called by the partner/trader contract, to delegate to an EOA who locks vePERP on the partner/trader contract's behalf
    function setBeneficiaryCandidate(address candidate) external;

    // should be called by the EOA (beneficiary), to confirm the delegation
    function updateBeneficiary(address truster) external;

    // should be called by the partner/trader contract, if you decided to revoke the delegation
    function clearBeneficiary(address beneficiary) external;

    function getBeneficiaryCandidate(address truster) external view returns (address);

    function getBeneficiaryAndQualifiedMultiplier(address user) external view returns (address, uint256);
}
```

Assume that you’re using `PartnerContract` as a referral partner, the account that owns a referral code; Also, `TraderContract` as a referral trader, the account that uses a referral code to trade. And you would like to delegate both `PartnerContract` and `TraderContract`’s referral rewards to an EOA `Alice`.

First, you will need to modify your `PartnerContract` and `TraderContract` to implement `setBeneficiaryCandidate()`:

```solidity
interface IRewardDelegate {
    function setBeneficiaryCandidate(address candidate) external;
    function clearBeneficiary(address beneficiary) external;
}

// do the same thing for TraderContract
contract PartnerContract is OwnableUpgradeable {
    ...

    // add the following functions to your contract
    function setBeneficiaryCandidate(address candidate) external onlyOwner {
        IRewardDelegate(rewardDelegate).setBeneficiaryCandidate(candidate);
    }

    function clearBeneficiary(address beneficiary) external onlyOwner {
        IRewardDelegate(rewardDelegate).clearBeneficiary(beneficiary);
    }
}
```

After the deployment, both `PartnerContract` and `TraderContract` could then assign `Alice` as the beneficiary, and `Alice` needs to confirm 2 delegations:

```tsx
// for PartnerContract
const partnerSetBeneficiaryCandidateTx = await partnerContract
  .connect(partnerContractOwner)
  .setBeneficiaryCandidate(alice.address)
await partnerSetBeneficiaryCandidateTx.wait()

const aliceUpdateBeneficiaryForPartnerTx = vePERPReferralRewardDelegate
  .connect(alice)
  .updateBeneficiary(partnerContract.address)
await aliceUpdateBeneficiaryForPartnerTx.wait()

// for TraderContract
const traderSetBeneficiaryCandidateTx = await traderContract
  .connect(traderContractOwner)
  .setBeneficiaryCandidate(alice.address)
await traderSetBeneficiaryCandidateTx.wait()

const aliceUpdateBeneficiaryForTraderTx = vePERPReferralRewardDelegate
  .connect(alice)
  .updateBeneficiary(traderContract.address)
await aliceUpdateBeneficiaryForTraderTx.wait()
```

It’s also worth noting that only contracts can call `RewardDelegate.setBeneficiaryCandidate()`, and only an EOA can be set as the beneficiary. On the other hand, an EOA cannot set another EOA or contract as the beneficiary. EOAs have no need to delegate since EOAs are not restricted from locking vePERP.

## What is QualifiedMultiplier?

You might notice that there is a `getBeneficiaryAndQualifiedMultiplier(user)` function in `vePERPReferralRewardDelegate`.

Since contracts cannot lock vePERP, the delegated EOA (beneficiary) is the one who locks vePERP for your contracts. Also, multiple contracts can all delegate to the same beneficiary. We use `qualifiedMultiplier * 10 vePERP` to calculate the required vePERP amount of a beneficiary. The base value of `qualifiedMultiplier` is `1` when no contracts delegate to the beneficiary; Once the beneficiary accepts any delegation, the `qualifiedMultiplier` will be the base value `1` + how many contracts delegate to the beneficiary.

In the above cases, there are two contracts (`PartnerContract` and `TraderContract`) that delegate to `Alice` as the beneficiary. The `qualifiedMultiplier` of `Alice` would be `1 (base value) + 2 (two delegations) = 3`. The required vePERP amount of `Alice` would be `3 * 10 = 30 vePERP`. That means `Alice` must have 30 vePERP, so that the two contracts who delegated to `Alice` become eligible to participate in the Referral Program.

The results of calling `getBeneficiaryAndQualifiedMultiplier(truster)` would be:

```tsx
await vePERPReferralRewardDelegate.getBeneficiaryAndQualifiedMultiplier(partnerContract.address)
// returns [aliceAddress, 3]

await vePERPReferralRewardDelegate.getBeneficiaryAndQualifiedMultiplier(traderContract.address)
// returns [aliceAddress, 3]

await vePERPReferralRewardDelegate.getBeneficiaryAndQualifiedMultiplier(bob.address)
// since no one delegates to Bob, so Bob's beneficiary is himself and his qualifiedMultiplier is 1
// returns [bobAddress, 1]
```
