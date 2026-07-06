import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { IMAGES } from '@/lib/images';
import styles from './TeamSection.module.scss';

type TeamSectionProps = {
  variant?: 'preview' | 'full';
};

const TEAM_MEMBERS = [
  {
    name: 'Mantaj Sidhu',
    role: 'Ex-Google, MBA',
    focus: 'Operations and customer satisfaction',
    image: IMAGES.mantaj,
    imageAlt: 'Mantaj Sidhu from Gill Organics at the farm',
    imagePosition: 'center 38%',
    description:
      'Handles operations and customer satisfaction, and creates documentaries and music videos in his free time.',
  },
  {
    name: 'Dr. Baljeet Gill',
    role: 'PhD, Agriculturalist',
    focus: 'Production and organic farming expertise',
    image: IMAGES.baljeet,
    imageAlt: 'Dr. Baljeet Gill from Gill Organics at the farm',
    imagePosition: 'center 58%',
    description:
      'Handles production and organic farming expertise, and likes to read Punjabi literature in his free time.',
  },
];

export function TeamSection({ variant = 'preview' }: TeamSectionProps) {
  const isFull = variant === 'full';

  return (
    <section
      id={isFull ? 'team' : undefined}
      className={`${styles.team} ${isFull ? styles['team--full'] : ''}`}
      aria-labelledby={isFull ? 'about-team-heading' : 'home-team-heading'}
    >
      <Container className={styles.team__container}>
        <div className={styles.team__content}>
          <div className={styles.team__heading}>
            <span>Meet the team</span>
            <h2 id={isFull ? 'about-team-heading' : 'home-team-heading'}>
              Two cousins growing trust from Patiala
            </h2>
          </div>

          <p className={styles.team__intro}>
            Gill Organics is run by two cousins from Patiala who are passionate
            about organic farming and problem solving, bringing their skills and
            ethics together to solve the complex problem of making genuine
            organic food available to the common man.
          </p>

          <div className={styles.team__grid}>
            {TEAM_MEMBERS.map((member, index) => (
              <article key={member.name} className={styles.member}>
                <div className={styles.member__photo}>
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className={styles.member__image}
                    style={{ objectPosition: member.imagePosition }}
                  />
                  <span className={styles.member__count}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <p className={styles.member__eyebrow}>{member.focus}</p>
                  <h3>{member.name}</h3>
                  <p className={styles.member__role}>{member.role}</p>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>

          {!isFull && (
            <div className={styles.team__action}>
              <a
                href="/about#team"
                className={styles.team__button}
                aria-label="See all members"
              >
                <span>See all members</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
