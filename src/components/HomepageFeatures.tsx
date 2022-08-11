/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Decentralized and Open Source',
    image: 'https://assets.website-files.com/6074773e5354390d19151475/60c9a51ecb84fd04a2cbf21f_Fully%20Decentralised.svg',
    description: (
      <>
        Trade instantly using open source vAMM technology. There are no signups, no intermediaries, and no custodians.
          You are fully in control of your funds at all times.
      </>
    ),
  },
  {
    title: 'High Performant and Secure',
    image: 'https://assets.website-files.com/6074773e5354390d19151475/60c9a51e1a50abd35622a70c_L2%20Transactions.svg',
    description: (
      <>
        A world class trading experience that is permissionless and secure,
        thanks to the power of public blockchains and L2 scaling solution Optimism.
        Enjoy fast transactions and minimal fees with the security of Ethereum's L1.
      </>
    ),
  },
  {
    title: 'Get Leveraged Exposure to Crypto-assets',
    image: 'https://assets.website-files.com/6074773e5354390d19151475/60c9a51fdfb71b0c55d28736_Trade%20any%20asset.svg',
    description: (
      <>
          Trade or provide liquidity with up to 10x leverage for a variety of large-cap and long tail crypto assets.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
