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
    title: 'Decentralized by Design',
    image: 'https://assets.website-files.com/6074773e5354390d19151475/60c9a51ecb84fd04a2cbf21f_Fully%20Decentralised.svg',
    description: (
      <>
        Trade instantly using vAMM technology. No sign-ups, no middle man, 
        no waiting for counterparties & no wondering if your funds are safe.
      </>
    ),
  },
  {
    title: 'Best in Class Performance',
    image: 'https://assets.website-files.com/6074773e5354390d19151475/60c9a51e1a50abd35622a70c_L2%20Transactions.svg',
    description: (
      <>
        A world class trading experience that is open to all, 
        thanks to the power of public blockchains and L2 scaling solutions. 
        Fast transactions with minimal fees.
      </>
    ),
  },
  {
    title: 'Trade any Asset',
    image: 'https://assets.website-files.com/6074773e5354390d19151475/60c9a51fdfb71b0c55d28736_Trade%20any%20asset.svg',
    description: (
      <>
        Trading crypto assets is just the beginning. Gold, fiat, 
        commodities—Perpetual Protocol will support it all.
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
