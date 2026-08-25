import Image from 'next/image';
import { Container } from '@/components/Container/Container';
import { IMAGES } from '@/lib/images';
import styles from './TeamSection.module.scss';

type TeamSectionProps = {
  variant?: 'preview' | 'full';
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  description: string | string[];
  instagram?: string;
};

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className={styles.member__instagramDot} />
    </svg>
  );
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mantaj Sidhu',
    role: 'Ex-Google, MBA',
    image: IMAGES.mantaj,
    imageAlt: 'Mantaj Sidhu from Gill Organics at the farm',
    imagePosition: 'center 35%',
    description:[
      "Mantaj grew up in Patiala, did his MBA from Panjab University, Chandigarh and his flair for technology and marketing eventually led him across the world, ending up at Google Ireland. His entrepreneurial itch and a desire to do something meaningful for the society that can impact people's lives for good led him back to his motherland and he's handling the tech and operations at Gill Organics.",
      "He likes to produce films and documentaries and likes to travel and meet people from different cultures."
    ],
    instagram: 'https://www.instagram.com/mantajsidhu_',
  },
  {
    name: 'Dr. Baljeet Singh Gill',
    role: 'PhD, Agriculturalist',
    image: IMAGES.teamJagdeep,
    imageAlt: 'Dr. Baljeet Singh Gill from Gill Organics',
    imagePosition: 'center',
    description:[
      "Baljeet grew up in the Gill Farmhouse which was his home before he moved to Patiala to obtain his doctorate from Punjabi University Patiala. His passion for organic farming and his urge to do something for the society churned out in the form of Gill Organics.",
      "He's the organic-farming expert at Gill Organics who likes to stay on top of the latest organic farming methods and developments in this field which is seeing constant updates. In his free time he likes to read Punjabi literature and go for long walks in the farms."
    ],
    instagram: 'https://www.instagram.com/baljeetsinghgill_72',
  },
];

const ABOUT_TEAM_MEMBERS: TeamMember[] = [
  ...TEAM_MEMBERS,
  {
    name: 'Manjot Kaur Gill',
    role: 'M.Phil, Packing Department',
    image: IMAGES.teamGurpreet,
    imageAlt: 'Manjot Kaur Gill from Gill Organics',
    imagePosition: 'center',
    description: [
      'The woman-power at the farm and Baljeet Gill’s partner in crime (and life), she is an M.Phil and ex-lecturer. She manages the packing department at the farm and makes sure whatever reaches the customer in their delivery bags is of the highest hygiene standards.',
      'She likes to experiment with different recipes in her kitchen and loves reading fiction novels in her free time.',
      'She’s forgotten her Instagram password and has been trying to log back in for some years now.',
    ],
  },
  {
    name: 'Darshan Ji',
    role: 'Farm Operations',
    image: IMAGES.teamHarjit,
    imageAlt: 'Darshan Ji from Gill Organics',
    imagePosition: 'center',
    description: [
      "With 35+ years of experience in organic farming, Darshan is the main man on the ground who has a wealth of knowledge on organic farming techniques, much more than what theory can teach you.",
      "Born and brought up in the village where the farm is located, Darshan is fully aware of the potential of the soil in that area and doesn't leave any stone unturned in getting the best out of organic farming.",
      "Darshan ji is lucky not to have an Instagram account."
    ]
  },
];

export function TeamSection({ variant = 'preview' }: TeamSectionProps) {
  const isFull = variant === 'full';
  const members = isFull ? ABOUT_TEAM_MEMBERS : TEAM_MEMBERS;

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
            {members.map((member, index) => (
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
                  <h3>{member.name}</h3>
                  <p className={styles.member__role}>{member.role}</p>
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.member__instagram}
                      aria-label={`Visit ${member.name}'s Instagram profile`}
                    >
                      <InstagramIcon />
                      <span>Instagram</span>
                    </a>
                  )}
                  {isFull && (
                    Array.isArray(member.description) ? (
                      member.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                    ) : (
                      <p>{member.description}</p>
                    )
                  )}
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
