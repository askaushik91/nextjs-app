'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import styles from './style.module.scss';

const tabs = [
  {
    id: 'program',
    title: 'PROGRAM DETAILS',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.0791 73.3997C38.963 72.339 40.5399 72.1955 41.6006 73.0794C42.6612 73.9633 42.8047 75.5402 41.9209 76.6009L29.4209 91.6009C28.603 92.5823 27.1763 92.789 26.1133 92.0803L18.6133 87.0803C17.4644 86.3145 17.154 84.7624 17.9199 83.6136C18.6858 82.4647 20.2379 82.1543 21.3867 82.9202L27.0166 86.6731L38.0791 73.3997ZM100 82.5003C101.381 82.5003 102.5 83.6196 102.5 85.0003C102.5 86.381 101.381 87.5003 100 87.5003H55C53.6193 87.5003 52.5 86.381 52.5 85.0003C52.5 83.6196 53.6193 82.5003 55 82.5003H100ZM38.0791 48.3997C38.963 47.339 40.5399 47.1955 41.6006 48.0794C42.6612 48.9633 42.8047 50.5402 41.9209 51.6009L29.4209 66.6009C28.603 67.5824 27.1763 67.789 26.1133 67.0803L18.6133 62.0803C17.4644 61.3145 17.154 59.7624 17.9199 58.6136C18.6858 57.4647 20.2379 57.1543 21.3867 57.9202L27.0166 61.6731L38.0791 48.3997ZM100 57.5003C101.381 57.5003 102.5 58.6196 102.5 60.0003C102.5 61.381 101.381 62.5003 100 62.5003H55C53.6193 62.5003 52.5 61.381 52.5 60.0003C52.5 58.6196 53.6193 57.5003 55 57.5003H100ZM38.0791 23.3997C38.963 22.339 40.5399 22.1956 41.6006 23.0794C42.6612 23.9633 42.8047 25.5402 41.9209 26.6009L29.4209 41.6009C28.603 42.5824 27.1763 42.789 26.1133 42.0803L18.6133 37.0803C17.4644 36.3145 17.154 34.7624 17.9199 33.6136C18.6858 32.4647 20.2379 32.1543 21.3867 32.9202L27.0166 36.6731L38.0791 23.3997ZM100 32.5003C101.381 32.5003 102.5 33.6196 102.5 35.0003C102.5 36.381 101.381 37.5003 100 37.5003H55C53.6193 37.5003 52.5 36.381 52.5 35.0003C52.5 33.6196 53.6193 32.5003 55 32.5003H100Z" fill="white"/>
        </svg>
    ),
  },

  {
    id: 'vegetables',
    title: 'LIST OF VEGETABLES',
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_116_103)">
        <path d="M28.4741 58.5442H36.648C37.6071 58.5442 38.3849 57.7664 38.3849 56.8073C38.3849 55.8482 37.6071 55.0703 36.648 55.0703H28.4741C27.515 55.0703 26.7372 55.8482 26.7372 56.8073C26.7372 57.7664 27.515 58.5442 28.4741 58.5442Z" fill="white"/>
        <path d="M65.3904 79.2617C59.5678 79.2617 54.8308 83.9987 54.8308 89.8213C54.8308 95.6438 59.5678 100.381 65.3904 100.381C66.3494 100.381 67.1273 99.6029 67.1273 98.6438V80.9987C67.1273 80.0396 66.3497 79.2617 65.3904 79.2617ZM63.6534 96.6915C60.5833 95.9151 58.3047 93.1293 58.3047 89.8213C58.3047 86.5132 60.5833 83.7274 63.6534 82.951V96.6915Z" fill="white"/>
        <path d="M71.051 79.2617C70.092 79.2617 69.3141 80.0396 69.3141 80.9987V98.6438C69.3141 99.6029 70.092 100.381 71.051 100.381C76.8736 100.381 81.6106 95.6438 81.6106 89.8213C81.6106 83.9987 76.8736 79.2617 71.051 79.2617ZM72.788 96.6915V82.951C75.8581 83.7274 78.1367 86.5132 78.1367 89.8213C78.1367 93.1293 75.8581 95.9151 72.788 96.6915Z" fill="white"/>
        <path d="M84.9968 59.6435C79.7376 59.6435 74.5988 61.1098 70.1884 63.8212C70.6904 59.9487 72.0128 56.2304 74.0928 52.9108C74.5936 52.1118 74.4115 51.0288 73.6313 50.4991C72.8141 49.9441 71.7065 50.1806 71.1842 51.0097C68.6905 54.9706 67.1504 59.4351 66.6572 64.0777C62.1579 61.2039 56.8659 59.6438 51.4443 59.6438C48.8614 59.6438 46.3602 59.9909 43.9858 60.638C44.2623 56.1598 44.4038 51.6275 44.4038 47.1285C44.4038 40.9472 41.2518 35.3348 35.9729 32.1154C33.6231 30.6798 30.9705 29.8249 28.229 29.6061L37.0973 6.72484C37.4438 5.83031 37 4.82432 36.1055 4.4775C35.2116 4.13127 34.205 4.57477 33.8582 5.46931L27.5449 21.7585V1.80983C27.5449 0.858555 26.8119 0.0291579 25.8612 0.000787646C24.8775 -0.0284511 24.071 0.760127 24.071 1.73717V21.7585L17.7575 5.46873C17.4109 4.5742 16.4049 4.1304 15.5101 4.47693C14.6156 4.82374 14.1715 5.82973 14.5183 6.72426L23.3866 29.6055C20.644 29.824 17.9919 30.6789 15.6465 32.1134C14.4587 32.8362 13.354 33.7053 12.3625 34.6965C9.04198 38.017 7.21326 42.432 7.21326 47.1282C7.21326 61.7374 8.67549 76.3748 11.5623 90.6934C12.1077 92.9378 12.6528 95.1803 13.1982 97.4247L17.853 113.974C18.8833 117.634 22.0055 119.999 25.808 119.999C25.808 119.999 25.8094 119.999 25.81 119.999C29.6116 119.998 32.7326 117.633 33.7609 113.974L34.3295 111.955C39.3777 117.172 45.3432 120 51.4446 120C57.5069 120 63.4105 118.055 68.2207 114.496C73.0309 118.055 78.9345 120 84.9968 120C100.391 120 112.787 101.828 112.787 86.7824C112.787 71.8182 100.32 59.6435 84.9968 59.6435ZM24.7907 33.0212H26.8229C28.3688 33.0212 29.8933 33.2754 31.3399 33.7638C29.6128 34.5208 27.7429 34.9151 25.8114 34.9151C23.8785 34.9151 22.0066 34.5202 20.2772 33.7626C21.7221 33.2751 23.2454 33.0212 24.7907 33.0212ZM25.8091 116.525H25.8083C24.0542 116.525 21.9218 115.608 21.1972 113.033L19.8878 108.378H22.8971C23.8481 108.378 24.6775 107.645 24.7062 106.694C24.7357 105.711 23.9471 104.904 22.9701 104.904H18.9105L16.5691 96.5799C15.9403 94.3448 15.3851 92.0891 14.9297 89.8122C14.512 87.7229 14.1255 85.6264 13.768 83.525H17.1623C18.1132 83.525 18.9426 82.7923 18.9713 81.8416C19.0008 80.8579 18.2122 80.0511 17.2352 80.0511H13.2055C11.716 70.3438 10.8832 60.5285 10.7199 50.7121H17.1623C18.1132 50.7121 18.9426 49.9794 18.9713 49.0287C19.0008 48.045 18.2122 47.2382 17.2352 47.2382H10.6875L10.6872 47.2379C10.6585 43.4288 12.1283 39.8434 14.8185 37.1534C15.3526 36.6193 15.9305 36.1341 16.5396 35.6941C19.3094 37.46 22.4895 38.3896 25.8117 38.3896C29.1339 38.3896 32.3123 37.46 35.0798 35.6938C38.7607 38.3427 40.9302 42.5389 40.9302 47.1288C40.9302 52.0423 40.7585 56.9958 40.4242 61.8718C30.5675 66.0463 23.6547 75.6404 23.6547 86.7829C23.6547 94.0868 26.6281 102.311 31.6103 108.796L30.417 113.034C29.6935 115.607 27.5623 116.525 25.8091 116.525ZM84.9968 116.526C79.2648 116.526 73.6988 114.547 69.3231 110.952C69.0026 110.689 68.6115 110.558 68.2204 110.558C67.8293 110.558 67.4382 110.689 67.1177 110.952C62.7423 114.547 57.176 116.526 51.444 116.526C38.3485 116.526 27.1278 100.171 27.1278 86.7824C27.1278 73.7335 38.0358 63.1175 51.444 63.1175C57.176 63.1175 62.742 65.097 67.1177 68.6914C67.7587 69.2177 68.6819 69.2177 69.3228 68.6914C73.6982 65.097 79.2646 63.1175 84.9965 63.1175C98.4044 63.1175 109.313 73.7335 109.313 86.7824C109.313 100.171 98.0926 116.526 84.9968 116.526Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_116_103">
        <rect width="120" height="120" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    ),
  },
];

export default function CloudFarmProgram() {

  const [activeTab, setActiveTab] = useState('program');

  return (
    <section className={styles.cloudFarm}>

      <div className={styles.cloudFarm__container}>

        <div className={styles.cloudFarm__heading}>
          <span></span>

          <h2>Cloud Farm Program</h2>
        </div>

        {/* Tabs */}

        <div className={styles.cloudFarm__tabs}>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.cloudFarm__tab} ${
                activeTab === tab.id ? styles.active : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className={styles.cloudFarm__tabIcon}>
                {tab.icon}
              </div>

              <span>{tab.title}</span>
            </button>
          ))}

        </div>

        {/* Content */}

        <div className={styles.cloudFarm__content}>

          {activeTab === 'program' && (
            <>
              <div className={styles.cloudFarm__image}>
                <Image
                  src={IMAGES.programdetails}
                  alt="Cloud Farm"
                  fill
                />
              </div>

              <div className={styles.cloudFarm__info}>

                <h3>PROGRAM DETAILS</h3>

                <ul>
                    <li>On joining the program, you will be allotted a dedicated piece of farm land of ~150 sq. yd. for the season. A season lasts 6 months.</li>
                    <li>You choose the vegetables you wish to grow from the list of vegetables given below and our organic-expert farmer will sow and maintain your vegetables on your mini-farm using organic methods.</li>
                    <li>Whatever your mini-farm produces in a week, it&apos;ll be harvested over the weekend and home delivered within 24 hours of harvesting and with no extra charge. One mini-farm gives enough weekly produce for the vegetables requirements of a family of 4.</li>
                    <li>You can also come to the Farm anytime you want for plucking and our helper will help you pluck the best veggies.</li>
                    <li>You can also access our Farmhouse for a quality time with your family (subject to availability). The Farmhouse has a traditional Punjab feel to it with exhibits like charkha, madhaani, bonfire, library etc. and all other basic amenities.</li>
                    <li>You can also pluck and enjoy our fresh organic fruit collection in the Farmhouse during your family visits.</li>
                    <li>For all the fish-lovers out there, you can also have a fishing experience at our water pond, where you can catch live fish and cook/take it home.</li>
                    <li>You will constantly be in touch with our team via Whatsapp for any request or query or a status update on your farm.</li>
                </ul>

                <Button href="/" label="Join a waitlist NOW" variant="primary" />

              </div>
            </>
          )}

          {activeTab === 'vegetables' && (
            <div className={styles.cloudFarm__vegetables}>
                <div className={styles.cloudFarm__info}>
                    <h3>Vegetables Included</h3>

                    <div className={styles.cloudFarm__vegGrid}>
                        <span>Tomato</span>
                        <span>Potato</span>
                        <span>Spinach</span>
                        <span>Onion</span>
                        <span>Carrot</span>
                        <span>Cauliflower</span>
                        <span>Capsicum</span>
                        <span>Radish</span>
                        <span>Brinjal</span>
                        <span>Lady Finger</span>
                    </div>
                </div>

                <div className={styles.cloudFarm__image}>
                    <Image
                        src={IMAGES.programdetails}
                        alt="Cloud Farm"
                        fill
                    />
                </div>
            </div>
            )}

        </div>

      </div>

    </section>
  );
}
