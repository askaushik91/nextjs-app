'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import styles from './style.module.scss';

const galleryImages = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
];

export default function ImageGallerySection() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.gallerySection__container}>

          <div className={styles.gallerySection__heading}>
            <span>Image Gallery</span>

            <h2>
              Moments from our farms
              <br />
              and fresh harvests
            </h2>
          </div>

          <div className={styles.galleryGrid}>

            {galleryImages.map((image, i) => (
              <div
                key={i}
                className={styles.galleryGrid__item}
                onClick={() => {
                  setOpen(true);
                  setIndex(i);
                }}
              >
                <Image
                  src={image}
                  alt="Gallery"
                  fill
                  className={styles.galleryGrid__image}
                />
              </div>
            ))}

          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryImages.map((img) => ({ src: img }))}
      />
    </>
  );
}