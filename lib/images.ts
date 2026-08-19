/**
 * Image paths. Use local /public/images/ files when available.
 * Placeholder URLs below allow the app to run without local assets.
 * Replace with your own images in /public/images/ and use paths like '/images/hero-bg.jpg'.
 */
const PLACEHOLDER_BASE = '/images';

export const IMAGES = {
  logo:`${PLACEHOLDER_BASE}/GillOrganicsLogo.png`,
  hero: `${PLACEHOLDER_BASE}/HeroImage.webp`,
  mantaj: `${PLACEHOLDER_BASE}/mantajphoto.webp`,
  baljeet: `${PLACEHOLDER_BASE}/baljeet.webp`,
  about: `${PLACEHOLDER_BASE}/aboutImage.webp`,
  aboutinner: `${PLACEHOLDER_BASE}/innerAbout.webp`,
  aboutcore: `${PLACEHOLDER_BASE}/aboutCore.webp`,
  servicesinner: `${PLACEHOLDER_BASE}/servicesbanner.webp`,
  howworksinner: `${PLACEHOLDER_BASE}/howitworks.webp`,
  howworksvideo: `${PLACEHOLDER_BASE}/howWorksVideo.webp`,
  programdetails: `${PLACEHOLDER_BASE}/PROGRAMDETAILSImage.webp`,
  whyUs: `${PLACEHOLDER_BASE}/WhyChooseUs.webp`,
  testimonials: `${PLACEHOLDER_BASE}/testimonialBg.webp`,
  faqquest: `${PLACEHOLDER_BASE}/faqQuestions.png`,
  contact: `${PLACEHOLDER_BASE}/contactus.webp`,
  teamMantaj: `${PLACEHOLDER_BASE}/mantaj_sidhu.png`,
  teamBaljeet: `${PLACEHOLDER_BASE}/baljeet_gill.png`,
  teamHarjit: `${PLACEHOLDER_BASE}/team-harjit.webp`,
  teamGurpreet: `${PLACEHOLDER_BASE}/team-gurpreet.webp`,
  teamJagdeep: `${PLACEHOLDER_BASE}/team-jagdeep.webp`,
} as const;
