'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import { VegetableIcons } from './VegetableIcons';
import { WAITLIST_HREF } from '@/lib/constants';
import styles from './style.module.scss';

const summerVegetables = [
  { id: 'zucchini', name: 'Zucchini', localName: 'Zucchini' },
  { id: 'tomato', name: 'Tomato', localName: 'Tamattar' },
  { id: 'bhindi', name: 'Okra', localName: 'Bhindi' },
  { id: 'ghiya', name: 'Bottle Gourd', localName: 'Ghiya' },
  { id: 'chappan_kaddu', name: 'Squash', localName: 'Chappan kaddu' },
  { id: 'kheera', name: 'Cucumber', localName: 'Kheera' },
  { id: 'lobia', name: 'Cowpea', localName: 'Lobia' },
  { id: 'kakkri', name: 'Armenian Cucumber', localName: 'Kakkri' },
  { id: 'pyaaz', name: 'Onion', localName: 'Pyaaz' },
  { id: 'tinda', name: 'Apple Gourd', localName: 'Tinda' },
  { id: 'torri', name: 'Ridge Gourd', localName: 'Torri' },
  { id: 'krela', name: 'Bitter Gourd', localName: 'Krela' },
  { id: 'petha', name: 'Ash Gourd', localName: 'Petha' },
  { id: 'lassan', name: 'Garlic', localName: 'Lassan' },
  { id: 'arbi', name: 'Taro Root', localName: 'Arbi' },
  { id: 'malabar_spinach', name: 'Malabar Spinach', localName: 'Malabar Spinach' },
];

const winterVegetables = [
  { id: 'mooli', name: 'Radish', localName: 'Mooli' },
  { id: 'shalgam', name: 'Turnip', localName: 'Shalgam' },
  { id: 'chukandar', name: 'Beetroot', localName: 'Chukandar' },
  { id: 'gaajar', name: 'Carrot', localName: 'Gaajar' },
  { id: 'paalak', name: 'Spinach', localName: 'Paalak' },
  { id: 'methe', name: 'Fenugreek Bunch', localName: 'Methe' },
  { id: 'methi', name: 'Fenugreek Leaves', localName: 'Methi' },
  { id: 'dhaniya', name: 'Coriander', localName: 'Dhaniya' },
  { id: 'saron', name: 'Mustard Greens', localName: "Saro'n" },
  { id: 'phull_gobi', name: 'Cauliflower', localName: 'Phull Gobi' },
  { id: 'band_gobi', name: 'Cabbage', localName: 'Band Gobi' },
  { id: 'broccoli', name: 'Broccoli', localName: 'Broccoli' },
  { id: 'lettuce', name: 'Lettuce', localName: 'Lettuce' },
  { id: 'hrra_pyaaz', name: 'Spring Onion', localName: 'Hrra Pyaaz' },
  { id: 'hrra_lassan', name: 'Green Garlic', localName: 'Hrra Lassan' },
  { id: 'baingan', name: 'Eggplant', localName: 'Baingan' },
  { id: 'tomato', name: 'Tomato', localName: 'Tamattar' },
  { id: 'mattar', name: 'Green Peas', localName: 'Mattar' },
  { id: 'rocket_leaves', name: 'Mixed Greens', localName: 'Rocket Leaves / Garden Cress / Dill' },
];

export default function CloudFarmProgram() {
  const [vegetableSeason, setVegetableSeason] = useState<'summer' | 'winter'>('summer');
  const practicalDetails = [
    { value: '150 sq. yd.', label: 'your dedicated farm plot' },
    { value: '6 months', label: 'in every growing season' },
    { value: '4–5 people', label: 'served by one mini-farm' },
    { value: 'Within 24 hrs', label: 'from harvest to doorstep' },
  ];

  return (
    <section className={styles.cloudFarm}>
      <div className={styles.cloudFarm__container}>
        <div className={styles.cloudFarm__heading}>
          <span>Your own organic mini-farm</span>
          <h2>Cloud Farm <span className={styles.accent}>Program</span></h2>
          <p>Choose what grows, while our farmers take care of the soil, cultivation and harvest.</p>
        </div>

        <div className={styles.cloudFarm__highlights} aria-label="Cloud Farm Program highlights">
          {practicalDetails.map((detail) => (
            <div key={detail.label} className={styles.cloudFarm__highlight}>
              <strong>{detail.value}</strong>
              <span>{detail.label}</span>
            </div>
          ))}
        </div>

        {/* 2-Column Grid Content */}
        <div className={styles.cloudFarm__columns}>

          {/* Left Column: Program Details Card */}
          <div className={styles.cloudFarm__card}>
            <div className={styles.cloudFarm__image}>
              <Image
                src={IMAGES.programdetails}
                alt="Cloud Farm Details"
                fill
                sizes="(max-width: 1100px) 100vw, 50vw"
                priority
              />
            </div>

            <div className={styles.cloudFarm__info}>
              <p className={styles.cloudFarm__cardLabel}>What&apos;s included</p>
              <h3>A farm that fits your family</h3>
              <ul>
                <li>A dedicated 150 sq. yd. plot for one six-month summer or winter season.</li>
                <li>Choose from around 20 seasonal vegetables for your plot—choose as many as you like.</li>
                <li>Our expert farmers sow, grow and maintain everything using 100% organic practices.</li>
                <li>Weekend harvests are delivered home within 24 hours, at no extra delivery charge.</li>
                <li>Visit your plot to pick vegetables with help from our farm team.</li>
                <li>Get farm updates and support through our app and WhatsApp.</li>
              </ul>
              
              <div className={styles.cloudFarm__btnWrapper}>
                <Button href={WAITLIST_HREF} label="Join Wait List" variant="primary" target="_blank" />
              </div>
            </div>
          </div>

          {/* Right Column: Vegetables Included Card */}
          <div className={styles.cloudFarm__card}>
            <div className={styles.cloudFarm__seasonImage}>
              <Image
                src={IMAGES.hero}
                alt="Fresh organic vegetables growing at Gill Organics"
                fill
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
              <span>Seasonal harvest, grown naturally</span>
            </div>
            <div className={styles.cloudFarm__info}>
              <div className={styles.cloudFarm__vegHeader}>
                <div>
                  <p className={styles.cloudFarm__cardLabel}>Plan your plot</p>
                  <h3>What can grow this season</h3>
                </div>
                
                <div className={styles.cloudFarm__seasonToggle}>
                  <button
                    className={`${styles.cloudFarm__seasonBtn} ${
                      vegetableSeason === 'summer' ? styles.activeSeason : ''
                    }`}
                    onClick={() => setVegetableSeason('summer')}
                  >
                    Summer
                  </button>
                  <button
                    className={`${styles.cloudFarm__seasonBtn} ${
                      vegetableSeason === 'winter' ? styles.activeSeason : ''
                    }`}
                    onClick={() => setVegetableSeason('winter')}
                  >
                    Winter
                  </button>
                </div>
              </div>

              <div className={styles.cloudFarm__vegGrid}>
                {(vegetableSeason === 'summer' ? summerVegetables : winterVegetables).map((veg, index) => {
                  const IconComponent = VegetableIcons[veg.id] || VegetableIcons.tomato;
                  return (
                    <div
                      key={`${veg.id}-${index}`}
                      className={`${styles.cloudFarm__vegCard} ${
                        veg.id === 'rocket_leaves' ? styles.cloudFarm__vegCardWide : ''
                      }`}
                    >
                      <div className={styles.cloudFarm__vegIconWrapper}>
                        <IconComponent size="32" />
                      </div>
                      <div className={styles.cloudFarm__vegNames}>
                        <span className={styles.cloudFarm__vegName}>{veg.name}</span>
                        <span className={styles.cloudFarm__vegLocalName}>{veg.localName}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

