'use client';

import { useRef, useState } from 'react';
import styles from './TestimonialsSection.module.scss';

export const TestimonialsSection: React.FC = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className={styles.section}>

      <span className={styles.deco}>Testimonials</span>

      <div className={styles.section__container}>

        {/* MAIN VIDEO */}
        <div className={styles.videoWrap}>

          <video
            ref={videoRef}
            className={styles.video}
            poster="/images/testimonialBg.webp"
            preload="metadata"
          >
            <source src="/videos/testimonialvideo.mp4" type="video/mp4" />
          </video>

          <div className={styles.videoOverlay}>

            <button
              type="button"
              className={styles.playBtn}
              onClick={handlePlay}
            >
              {isPlaying ? (
                <span className={styles.pauseIcon} />
              ) : (
                <span className={styles.playIcon} />
              )}
            </button>

            <p className={styles.caption}>
              See how we helped Groover to grow 11x faster
            </p>

          </div>
        </div>

        {/* TEXT TESTIMONIALS */}
        <div className={styles.textRow}>

          <div className={styles.textBlock}>
            <p>
              “The freshness is unmatched! It feels amazing to receive vegetables grown from our own leased farm.”
            </p>
            <h4>Ramesh Sharma</h4>
            <span>Product Manager at Jomanar</span>
          </div>

          <div className={styles.textBlock}>
            <p>
              “Healthy, chemical-free produce delivered right to our home. Highly recommended!”
            </p>
            <h4>Priya Mehta</h4>
            <span>Freelance UX Designer</span>
          </div>

          <div className={styles.textBlock}>
            <p>
              “Transparent process and excellent service. We can actually see what&apos;s being grown.”
            </p>
            <h4>Amit Verma</h4>
            <span>Product Designer at Martina.co</span>
          </div>

        </div>

        {/* SMALL VIDEO TESTIMONIALS */}
        <div className={styles.videoTestimonials}>

          <div className={styles.videoCard}>
            <video
              src="/images/client1.mp4"
              poster="/images/videobg1.webp"
              controls
            />
            <div className={styles.videoDetails}>
              <h5>Albert Flores</h5>
              <span>Founder of GearUp</span>
            </div>
          </div>

          <div className={styles.videoCard}>
            <video
              src="/images/client2.mp4"
              poster="/images/videobg2.webp"
              controls
            />
            <div className={styles.videoDetails}>
            <h5>Leslie Alexander</h5>
            <span>Co-Founder of Womenia</span>
            </div>
          </div>

          <div className={styles.videoCard}>
            <video
              src="/images/client3.mp4"
              poster="/images/videobg3.webp"
              controls
            />
            <div className={styles.videoDetails}>
            <h5>Courtney Henry</h5>
            <span>Founder of CH Beauty</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};