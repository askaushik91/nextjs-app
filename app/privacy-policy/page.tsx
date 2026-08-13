import type { Metadata } from 'next';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Gill Organics handles personal information shared through this website.',
};

const privacySections = [
  { title: 'Information We Collect', paragraphs: ['We collect the information you choose to share through our contact and enquiry forms, such as your name, email address, phone number, address, and farm or delivery preferences. We may also receive information you provide when you contact us by email, phone, or WhatsApp.'] },
  { title: 'How We Use Your Information', paragraphs: ['We use your information to respond to enquiries, manage waitlist or subscription requests, arrange farm and delivery services, provide customer support, and improve our website and services. We only use your details for purposes connected with Gill Organics and our customer relationship with you.'] },
  { title: 'Communications', paragraphs: ['We may contact you about your enquiry, booking, seasonal farm programme, deliveries, service updates, or changes that affect your subscription. You can ask us to stop non-essential communications at any time by contacting us.'] },
  { title: 'Sharing of Information', paragraphs: ['We do not sell your personal information. We may share only the information needed with trusted service providers who help us operate our website, process communications, or provide farm and delivery services. They must handle the information securely and only for the required service.'] },
  { title: 'Cookies and Website Data', paragraphs: ['Like most websites, we may collect limited technical information such as browser type, device information, and pages visited to maintain and improve the website. We do not use this information to personally identify you unless you separately provide identifying information.'] },
  { title: 'Data Security and Retention', paragraphs: ['We take reasonable administrative and technical measures to protect personal information. No online system is completely secure, but we retain information only for as long as reasonably needed for the purposes described in this policy, legal obligations, or legitimate business records.'] },
  { title: 'Your Choices', paragraphs: ['You may request access to, correction of, or deletion of the personal information we hold about you, subject to applicable legal or operational requirements. To make a request, please contact us using the details below.'] },
  { title: 'Updates to This Policy', paragraphs: ['We may update this Privacy Policy from time to time. The latest version will be published on this page, and continued use of the website after an update indicates acceptance of the revised policy.'] },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Gill Organics</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.intro}>Your trust matters to us. Here is how we collect, use and protect the information you share with Gill Organics.</p>
        </div>
      </section>
      <section className={styles.content}>
        <p className={styles.notice}>This policy applies to information collected through the Gill Organics website and when you contact us about our services.</p>
        <div className={styles.grid}>
          {privacySections.map((section, index) => (
            <article key={section.title} className={styles.card}>
              <div className={styles.cardHeader}><span className={styles.number}>{index + 1}</span><h2>{section.title}</h2></div>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </div>
        <aside className={styles.contact}><h2>Questions about your privacy?</h2><p>Email us at <a href="mailto:gillorganics@gmail.com">gillorganics@gmail.com</a>.</p></aside>
      </section>
    </main>
  );
}
