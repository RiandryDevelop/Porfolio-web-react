/**
 * Single source of truth for identity, links and page structure.
 * Anything that appears in more than one component belongs here.
 */

export const site = {
  name: 'Riandry Connor',
  role: 'Full-Stack Developer',
  // Used to build absolute URLs for canonical tags, Open Graph and the sitemap.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://porfolio-web-react.vercel.app',
  email: 'riandrydevsoffers@gmail.com',
  location: 'Santo Domingo, Rep. Dominicana',
  ogImage: '/images/og-default.png',
};

export const socials = {
  github: 'https://github.com/RiandryDevelop',
  linkedin: 'https://www.linkedin.com/in/riandry-connor-b71275209/',
};

/**
 * Drives the header nav, the mobile drawer and the scroll-spy. `id` must match
 * the corresponding section element on the home page.
 */
export const navSections = [
  { id: 'work', labelKey: 'nav.work' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'stack', labelKey: 'nav.stack' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const cvByLocale = {
  es: '/cv/RiandryConnor_CV_ES.pdf',
  en: '/cv/RiandryConnor_CV_EN.pdf',
};
