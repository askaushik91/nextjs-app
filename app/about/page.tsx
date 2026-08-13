import Image from 'next/image';
import type { Metadata } from 'next';
import { Container } from '@/components/Container/Container';
import BannerSection from '../../components/BannerSection/BannerSection';
import styles from './about.module.scss';
import { IMAGES } from '@/lib/images';
import { Button } from '@/components/Button/Button';
import { TeamSection } from '@/components/TeamSection/TeamSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Gill Organics—our mission, founding story, and commitment to sustainability, community, and health through organic farming.',
  openGraph: {
    title: 'About Us | Gill Organics',
    description:
      'Learn about Gill Organics—our mission, founding story, and commitment to sustainability, community, and health.',
  },
};

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M11.25 3.75L10.1925 4.8075L13.6275 8.25H1.5V9.75H13.6275L10.185 13.1925L11.25 14.25L16.5 9L11.25 3.75Z"
      fill="#052D23"
    />
  </svg>
);

const FEATURES = [
  { 
    title: "Pure Food", 
    description: "Zero synthetic pesticides or harmful fertilizers. We let nature do the work", 
    icon: <ArrowIcon />
  },
  { 
    title: "Transparent Farming", 
    description: "No hidden origins. You know exactly which plot of land your food grew on.", 
    icon: <ArrowIcon />
  },
  { 
    title: "Direct Delivery", 
    description: "By cutting out the middleman, we reduce the carbon footprint and ensure maximum freshness.", 
    icon: <ArrowIcon />
  },
  { 
    title: "Community Growth", 
    description: "We support local agricultural expertise and sustainable land management.", 
    icon: <ArrowIcon />
  }
];

export default function AboutPage() {
  return (
    <div>
      <BannerSection
        bannerImage={IMAGES.aboutinner}
        bannerImageAlt="About Banner"
        title="From Our Soil to Your Table."
        description="Reclaiming the connection between people and the food they eat through sustainable, transparent, and community-driven farming."
        btnText="Get Started"
        btnPath="/contact"
      />

      {/*Section 1 - Our Story*/}
      <section className={styles.section} aria-labelledby="about-heading">
        <span className={styles.section__deco} aria-hidden>
          About
        </span>
        <Container>
          <div className={styles.section__grid}>
            <div className={styles.section__content}>            
              <h2 className={styles.section__subheading}>
                Our Story
              </h2>
              <p className={styles.section__text}>
                Gill Organics is the brainchild of 2 cousins from Patiala - Dr. Baljeet Singh Gill and Mantaj Singh Sidhu, who have grown up in a farming household and are as passionate about organic ways of living as they are concerned about the level of harmful elements found in our food today.<br /><br />
                One fine October, Mantaj returns back to India after quitting his job at Google Ireland and sets out to solve the problem of chemical-laden food in Punjab. A chance phone call with his cousin, Baljeet - who has also had the entrepreneurial urge always - and both the cousins decide to combine their ethics and skills and solve this problem together.<br /><br />
                Starting with 4-5 friends and family as their first customers, they spent a year as a pilot to see if they can even deliver on the promise of regular, genuine, fresh organic food supply, which they did.<br /><br />
                For their first commercial season they initially struggled to convince local customers to join their program, but one viral reel got them into household conversations across the country and the rest is history.<br /><br />
                Now, Gill Organics is serving three cities and hundreds of families, sending them weekly supply of organic food of the highest order and good vibes.<br /><br />
                The cousins draw inspiration from their late grandfather - Sr. Baldev Singh Sidhu - who was a firm believer in an organic lifestyle and lived healthily to a ripe age of 94.
              </p>
            </div>
            <div className={styles.section__imageWrap}>
              <Image
                src={IMAGES.about}
                alt="Farmers carrying crates of fresh produce in the field"
                width={566}
                height={720}
                className={styles.section__image}
              />
            </div>
          </div>
        </Container>
      </section>

      {/*Section 2 - Our Core Pillars*/}
      <section className={styles.ourcores} aria-labelledby="core-heading">
        <Container>
          <div className={styles.ourcores__grid}>
            <div className={styles.ourcores__imageWrap}>
              <Image
                src={IMAGES.aboutcore}
                alt="Farmers carrying crates of fresh produce in the field"
                width={566}
                height={720}
                className={styles.ourcores__image}
              />
            </div>

            <div className={styles.ourcores__content}>
              <h2 className={styles.ourcores__subheading}>
                Our Core Pillars
              </h2>
              <h2 className={styles.ourcores__heading}>
                  Growing Trust. Growing Naturally.
                </h2>
                <ul className={styles.ourcores__textlist}>
                  {FEATURES.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature.icon}
                    <p>
                      <strong>{feature.title}:</strong> {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <TeamSection variant="full" />

      <div className={styles.ctaBar}>
        <div className={styles.ctaBar__container}>
          <div className={styles.ctaBar__text}>
            <div className={styles.ctaBar__texticon}>👋</div>
            <span>Start Your Organic <br />Farming Journey Today!</span>
          </div>
          <Button href="/contact" label="Get Started" variant="primary" />
          </div>
      </div>
    </div>
  );
}
