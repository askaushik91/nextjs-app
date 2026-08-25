'use client';

import { useState, useEffect } from 'react';
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
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setVisibleItems(1);
      } else if (window.innerWidth <= 768) {
        setVisibleItems(2);
      } else if (window.innerWidth <= 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - visibleItems);

  // Adjust slideIndex if it exceeds maxIndex after resize
  useEffect(() => {
    if (slideIndex > maxIndex) {
      setSlideIndex(maxIndex);
    }
  }, [maxIndex, slideIndex]);

  // Auto-slide effect
  useEffect(() => {
    if (maxIndex === 0 || open || isHovered) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex, open, isHovered]);

  const handlePrev = () => {
    setSlideIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

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

          <div
            className={styles.sliderContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.sliderViewport}>
              <div
                className={styles.sliderTrack}
                style={{
                  transform: `translateX(-${slideIndex * (100 / visibleItems)}%)`,
                }}
              >
                {galleryImages.map((image, i) => (
                  <div
                    key={i}
                    className={styles.sliderSlide}
                    style={{ flex: `0 0 ${100 / visibleItems}%` }}
                    onClick={() => {
                      setLightboxIndex(i);
                      setOpen(true);
                    }}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={image}
                        alt={`Farm moment ${i + 1}`}
                        fill
                        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className={styles.sliderImage}
                        priority={i < 4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {maxIndex > 0 && (
              <>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.prevButton}`}
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${styles.navButton} ${styles.nextButton}`}
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Pagination Dots */}
          {maxIndex > 0 && (
            <div className={styles.dotsContainer}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.dot} ${slideIndex === i ? styles.activeDot : ''}`}
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={lightboxIndex}
        slides={galleryImages.map((img) => ({ src: img }))}
      />
    </>
  );
}