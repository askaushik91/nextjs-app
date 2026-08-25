'use client';

import { useEffect, useRef, useState } from 'react';
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

const summerComplementaryVegetables = [
  { id: 'bhindi', name: 'Achari Chilli', localName: 'ਅਚਾਰੀ ਮਿਰਚ' },
  { id: 'arbi', name: 'Taro Root', localName: 'ਅਰਬੀ' },
  { id: 'bhindi', name: 'Green Chilli', localName: 'ਹਰੀ ਮਿਰਚ' },
  { id: 'kheera', name: 'Cucamelon', localName: 'ਚਿੱਬਰ' },
];

const winterComplementaryVegetables = [
  { id: 'gaajar', name: 'Baby Potato', localName: 'ਬੇਬੀ ਆਲੂ' },
  { id: 'lobia', name: 'French Beans', localName: 'ਫ੍ਰੈਂਚ ਬੀਨਜ਼' },
  { id: 'band_gobi', name: 'Kohlrabi', localName: 'ਗੰਢ ਗੋਭੀ' },
  { id: 'gaajar', name: 'Black Carrot', localName: 'ਕਾਲੀ ਗਾਜਰ' },
  { id: 'dhaniya', name: 'Mint', localName: 'ਪੁਦੀਨਾ' },
  { id: 'band_gobi', name: 'Purple Cabbage', localName: 'ਜਾਮਣੀ ਗੋਭੀ' },
  { id: 'phull_gobi', name: 'Red Cauliflower', localName: 'ਲਾਲ ਫੁੱਲ ਗੋਭੀ' },
  { id: 'bhindi', name: 'Bell Pepper', localName: 'ਸ਼ਿਮਲਾ ਮਿਰਚ' },
  { id: 'phull_gobi', name: 'Yellow Cauliflower', localName: 'ਪੀਲੀ ਫੁੱਲ ਗੋਭੀ' },
];

export default function CloudFarmProgram() {
  const [season, setSeason] = useState<'summer' | 'winter'>('summer');
  const [detailsRevealed, setDetailsRevealed] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const practicalDetails = [
    { value: '150 sq. yd.', label: 'your dedicated farm plot' },
    { value: '6 months', label: 'in every growing season' },
    { value: '4–5 people', label: 'served by one mini-farm' },
    { value: 'Within 24 hrs', label: 'from harvest to doorstep' },
  ];
  const seasonalVegetables = season === 'summer' ? summerVegetables : winterVegetables;
  const seasonalComplementaryVegetables =
    season === 'summer' ? summerComplementaryVegetables : winterComplementaryVegetables;
  const seasonLabel = season === 'summer' ? 'Summer' : 'Winter';

  useEffect(() => {
    const detailsElement = detailsRef.current;

    if (!detailsElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDetailsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(detailsElement);
    return () => observer.disconnect();
  }, []);

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

            <div
              ref={detailsRef}
              className={`${styles.cloudFarm__info} ${styles.cloudFarm__detailsInfo} ${
                detailsRevealed ? styles.cloudFarm__detailsInfoVisible : ''
              }`}
            >
              {/* <p className={styles.cloudFarm__cardLabel}>What&apos;s included</p> */}
              <h3>HOW IT WORKS</h3>
              <ul>
                <li>On joining the program, you will be allotted a dedicated piece of farm land of ~150 sq. yd. for the season - Winter/Summer. A season lasts 6 months.</li>
                <li>We share a list of ~20 items that can grow on your farm in that season and you choose which items you want on your farm - you may choose all. </li>
                <li>Our team of expert farmers will sow and maintain your farm using 100% organic methods. Zero compromise on quality and authenticity.</li>
                <li>Whatever your mini-farm produces in a week, it&apos;ll be harvested over the weekend and home delivered within 24 hours of harvesting and with no extra charge. One mini-farm gives enough weekly produce for the veggie/salad requirements of a family of 4-5 members.</li>
                <li>You can also come to the farm anytime you want for plucking and our helper will help you pluck the best veggies.</li>
                <li>You can also access our Farmhouse for a quality time with your family (subject to availability). The Farmhouse has a traditional Punjab feel to it with exhibits like charkha, madhaani, bonfire, library etc. and all other basic amenities.</li>
                <li>You will constantly be in touch with our team via our App and Whatsapp for any request or query or a status update on your farm.</li>
              </ul>
              
              <div className={styles.cloudFarm__btnWrapper}>
                <Button href={WAITLIST_HREF} label="Join Waitlist" variant="primary" target="_blank" />
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
              <div className={styles.cloudFarm__produceTabs} role="tablist" aria-label="Growing seasons">
                <button
                  type="button"
                  role="tab"
                  aria-selected={season === 'summer'}
                  className={`${styles.cloudFarm__produceTab} ${
                    season === 'summer' ? styles.activeProduceTab : ''
                  }`}
                  onClick={() => setSeason('summer')}
                >
                  Summer
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={season === 'winter'}
                  className={`${styles.cloudFarm__produceTab} ${
                    season === 'winter' ? styles.activeProduceTab : ''
                  }`}
                  onClick={() => setSeason('winter')}
                >
                  Winter
                </button>
              </div>

              <div className={styles.cloudFarm__vegHeader}>
                <div>
                  <p className={styles.cloudFarm__cardLabel}>Plan your plot</p>
                  <h3>Seasonal Fruits &amp; Vegetables</h3>
                </div>
              </div>

              <div className={styles.cloudFarm__produceGroup}>
                <h4>{seasonLabel} Veggies</h4>
                <div className={styles.cloudFarm__vegGrid}>
                  {seasonalVegetables.map((veg, index) => (
                    <VegetableCard key={`${veg.id}-${index}`} vegetable={veg} />
                  ))}
                </div>
              </div>

              <div className={styles.cloudFarm__produceGroup}>
                <h4>Complementary Veggies</h4>
                <div className={styles.cloudFarm__vegGrid}>
                  {seasonalComplementaryVegetables.map((veg, index) => (
                    <VegetableCard key={`${veg.id}-${index}`} vegetable={veg} isComplementary />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function VegetableCard({
  vegetable,
  isComplementary = false,
}: {
  vegetable: { id: string; name: string; localName: string };
  isComplementary?: boolean;
}) {
  const IconComponent = VegetableIcons[vegetable.id] || VegetableIcons.tomato;

  return (
    <div className={`${styles.cloudFarm__vegCard} ${isComplementary ? styles.cloudFarm__vegCardSimple : ''}`}>
      {isComplementary ? (
        <span className={styles.cloudFarm__vegCheck} aria-hidden="true">✓</span>
      ) : (
        <div className={styles.cloudFarm__vegIconWrapper}>
          <IconComponent size="32" />
        </div>
      )}
      <div className={styles.cloudFarm__vegNames}>
        <span className={styles.cloudFarm__vegName}>{vegetable.name}</span>
        <span className={styles.cloudFarm__vegLocalName} lang="pa-Guru">{vegetable.localName}</span>
      </div>
    </div>
  );
}

