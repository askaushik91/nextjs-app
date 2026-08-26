'use client';

import { useState, useEffect } from 'react';
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
  { id: 1, image: '/images/HeroImage.webp', alt: 'Wide view of the organic farm' },
  { id: 2, image: '/images/aboutImage.webp', alt: 'Farmers carrying fresh produce in the field' },
  { id: 3, image: '/images/aboutCore.webp', alt: 'Healthy organic crops growing on the farm' },
  { id: 4, image: '/images/WhyChooseUs.webp', alt: 'Beautiful farm landscape' },
  { id: 5, image: '/images/howitworks.webp', alt: 'Cultivating the organic soil' },
  { id: 6, image: '/images/image6.jpg', alt: 'Beautiful sunset over the farmland' },
];

interface Post {
  id: string;
  image: string;
  permalink: string;
  alt: string;
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await fetch('/api/instagram');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        if (json.data && json.data.length > 0) {
          const formattedPosts = json.data.map((item: any) => ({
            id: item.id,
            image: item.media_url,
            permalink: item.permalink,
            alt: item.caption || 'Instagram Post',
          }));
          setPosts(formattedPosts);
        } else {
          handleFallback();
        }
      } catch (err) {
        console.error('Failed to fetch live feed, using mock posts:', err);
        handleFallback();
      } finally {
        setLoading(false);
      }
    }

    function handleFallback() {
      setPosts(
        mockPosts.map((p) => ({
          id: String(p.id),
          image: p.image,
          permalink: INSTAGRAM_URL,
          alt: p.alt,
        }))
      );
    }

    fetchFeed();
  }, []);

  if (loading) {
    return (
      <section className={styles.instagramSection}>
        <div className={styles.container}>
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

          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                  <div className={styles.skeleton} />
                </div>
              </div>
            ))}
          </div>

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
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
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
                  unoptimized={post.image.startsWith('http')}
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
