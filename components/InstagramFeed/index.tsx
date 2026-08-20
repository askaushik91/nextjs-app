'use client';

import Image from 'next/image';
import styles from './style.module.scss';

// SVG Instagram Icon
const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const INSTAGRAM_URL = 'https://www.instagram.com/gillorganics?igsi=MTFmNDFuZnd3bW52dg%3D%3D';

const mockPosts = [
  { id: 1, image: '/images/image1.jpg', alt: 'Fresh organic greens' },
  { id: 2, image: '/images/image2.jpg', alt: 'Healthy soil ecosystem' },
  { id: 3, image: '/images/image3.jpg', alt: 'Organic tomatoes' },
  { id: 4, image: '/images/image4.jpg', alt: 'Crisp organic carrots' },
  { id: 5, image: '/images/image5.jpg', alt: 'Vibrant summer crops' },
  { id: 6, image: '/images/image6.jpg', alt: 'Beautiful sunset over farm' },
];

export function InstagramFeed() {
  // NOTE FOR DEVELOPERS:
  // If you decide to use a third-party automated feed (e.g. Behold.so, Elfsight, or LightWidget),
  // you can easily replace the grid below with your widget iframe or script.
  // For example:
  // return (
  //   <section className={styles.instagramSection}>
  //     <div className={styles.container}>
  //       <div className={styles.heading}>
  //         <span>Social Media Feed</span>
  //         <h2>Follow Us on Instagram</h2>
  //         <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.instagramHandle}>@gillorganics</a>
  //       </div>
  //       <div className={styles.widgetWrapper} dangerouslySetInnerHTML={{ __html: 'YOUR_WIDGET_CODE_HERE' }} />
  //     </div>
  //   </section>
  // );

  return (
    <section className={styles.instagramSection}>
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.heading}>
          <span>Social Media Feed</span>
          <h2>Follow Us on Instagram</h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramHandle}
          >
            @gillorganics
          </a>
        </div>

        {/* Feed Grid */}
        <div className={styles.grid}>
          {mockPosts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gridItem}
              title="View on Instagram"
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <InstagramIcon />
                    <span>View on Instagram</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followButton}
          >
            <InstagramIcon />
            <span>Follow @gillorganics</span>
          </a>
        </div>
      </div>
    </section>
  );
}
