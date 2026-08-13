import type { Metadata } from 'next';
import styles from '../legal.module.scss';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Gill Organics service, delivery, cancellation and refund policy.',
};

const policySections = [
  {
    title: 'Service Duration and Commitment',
    paragraphs: [
      'The service includes the cultivation and maintenance of your personalized organic farm for a fixed term of six (6) months, commencing in October and concluding in March, with weekly deliveries of fresh, organic vegetables. Each delivery will be curated based on seasonal availability and prevailing farm conditions.',
      'The commencement and conclusion of deliveries will depend on the farm’s production capacity. Estimated dates for the first and final deliveries are at the end of October and March, respectively.',
    ],
  },
  {
    title: 'Product Availability',
    paragraphs: ['While we are committed to cultivating vegetables without the use of chemicals, organic farming is subject to variability. Certain vegetables may occasionally be delivered in limited quantities, or not at all. We cannot guarantee a consistent supply of all vegetables throughout the growing season.'],
  },
  {
    title: 'Payment Terms',
    paragraphs: [
      'Payments must be made in accordance with the specified Payment Plan. Accepted payment methods include bank transfers, UPI, or cash.',
      'If payment is not received by the due date, a grace period of seven (7) days will be granted. Following this period, deliveries will be suspended until the outstanding balance is settled. No refunds or compensation will be provided for missed deliveries during the suspension period.',
    ],
  },
  {
    title: 'Delivery Schedule',
    paragraphs: [
      'Deliveries will be made once per week on a mutually agreed-upon day. Any changes to the delivery schedule due to holidays, farm closures, or unforeseen events will be communicated in advance.',
      'If you cannot receive a scheduled delivery, please notify us at least twenty-four (24) hours in advance to arrange delivery to your backup address or opt for no delivery. Without notice, we will attempt delivery to your designated backup address. If delivery there is also unsuccessful, no delivery or refund will be issued for that week.',
    ],
  },
  {
    title: 'Cancellation and Refund Policy',
    paragraphs: [
      'Subscriptions cannot be cancelled mid-term. We expect customers to honour their payment commitments. For concerns or grievances, please contact us and we will work to resolve the issue promptly.',
      'No refunds will be issued for missed deliveries resulting from the customer’s non-payment or unavailability to receive the product.',
    ],
  },
  {
    title: 'Quality Assurance and Complaints',
    paragraphs: [
      'We are committed to providing fresh, high-quality organic produce. If you are dissatisfied with the quality of any product, please notify us within twenty-four (24) hours of delivery. We will assess the situation and take appropriate action as deemed necessary.',
      'Organic produce may differ in appearance from conventionally grown vegetables because it is cultivated in harmony with natural processes. All delivered vegetables pass our quality checks and are fit for consumption. Storage instructions for certain vegetables may be communicated via WhatsApp. As our produce is perishable, we do not accept returns once delivery has been completed and accepted.',
    ],
  },
  {
    title: 'Force Majeure',
    paragraphs: ['In circumstances beyond our control, including natural disasters, extreme weather conditions, strikes, or other unforeseeable events, deliveries may be delayed or cancelled without prior notice. We will make reasonable efforts to notify you of disruptions as soon as practicable.'],
  },
  {
    title: 'Customer Responsibilities',
    paragraphs: ['Customers are responsible for providing accurate, up-to-date delivery information and ensuring that someone is available to accept delivery. We assume no liability for loss, damage, or deterioration of produce once it has been delivered to the specified address.'],
  },
  {
    title: 'Amendments to Terms',
    paragraphs: ['We reserve the right to modify or amend these terms and conditions at any time. Subscribers will be notified of any significant changes before implementation.'],
  },
  {
    title: 'Liability Limitation',
    paragraphs: ['We are not responsible for indirect, incidental, or consequential damages arising from the use or inability to use our services, including loss of produce, missed deliveries, or delivery errors. Our total liability, whether in contract, tort, or otherwise, will not exceed the total fees paid by the customer during the six-month subscription period.'],
  },
  {
    title: 'Governing Law and Jurisdiction',
    paragraphs: ['These terms and conditions are governed by the laws of the State. Any disputes arising out of or in connection with these terms are subject to the exclusive jurisdiction of the courts located in Patiala.'],
  },
];

export default function RefundPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Gill Organics</p>
          <h1 className={styles.title}>Refund Policy</h1>
          <p className={styles.intro}>Clear terms for your seasonal farm subscription, deliveries and fresh organic produce.</p>
        </div>
      </section>
      <section className={styles.content}>
        <p className={styles.notice}>Please read these terms before joining the Gill Organics farm programme. They explain our shared commitments for the growing season.</p>
        <div className={styles.grid}>
          {policySections.map((section, index) => (
            <article key={section.title} className={styles.card}>
              <div className={styles.cardHeader}><span className={styles.number}>{index + 1}</span><h2>{section.title}</h2></div>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          ))}
        </div>
        <aside className={styles.contact}><h2>Need help with your subscription?</h2><p>Contact us at <a href="mailto:gillorganics@gmail.com">gillorganics@gmail.com</a>.</p></aside>
      </section>
    </main>
  );
}
