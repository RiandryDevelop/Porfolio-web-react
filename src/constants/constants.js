/**
 * Case studies, in the order they appear on the home page.
 *
 * Copy (title, summary, problem, solution, result) lives in the locale files
 * under `projects.items.<slug>` — this file only holds structural data.
 *
 * `media[0]` doubles as the card cover and the Open Graph image, so it should
 * always be a wide `image`.
 */

export const projects = [
  {
    slug: 'modest-pos',
    year: '2026',
    kind: 'saas',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PayPal', 'AI', 'Vercel'],
    stack: {
      frontend: 'Next.js 16 (App Router), TypeScript',
      backend: 'Supabase (Postgres, Auth, Storage)',
      payments: 'PayPal',
      ai: 'Motor de recomendación de venta cruzada',
      infra: 'Vercel',
    },
    links: {
      live: 'https://modestpos.com',
    },
    media: [
      { type: 'image', src: '/images/modest-pos/cashier.png', width: 768, height: 482 },
      { type: 'image', src: '/images/modest-pos/menu.png', width: 1352, height: 630 },
      { type: 'image', src: '/images/modest-pos/orders-board.png', width: 768, height: 480 },
      { type: 'image', src: '/images/modest-pos/orders-settings.png', width: 770, height: 480 },
    ],
  },
  {
    slug: 'screen-notify',
    year: '2026',
    kind: 'mobile',
    tags: ['Flutter', 'Dart', 'Kotlin', 'Android', 'RevenueCat', 'AdMob'],
    stack: {
      frontend: 'Flutter (Dart), Provider',
      native: 'Kotlin — NotificationListenerService',
      billing: 'RevenueCat, Google AdMob',
      storage: 'SharedPreferences con migración de esquema',
    },
    links: {
      store:
        'https://play.google.com/store/apps/details?id=com.riandryapps.screen_notify',
    },
    media: [
      {
        type: 'image',
        src: '/images/screen-notify/new-alert.jpg',
        width: 1080,
        height: 2200,
        portrait: true,
      },
      {
        type: 'image',
        src: '/images/screen-notify/alert-list.jpg',
        width: 1080,
        height: 1900,
        portrait: true,
      },
      {
        type: 'image',
        src: '/images/screen-notify/alert-styles.jpg',
        width: 1080,
        height: 1600,
        portrait: true,
      },
      {
        type: 'image',
        src: '/images/screen-notify/premium-store.jpg',
        width: 1080,
        height: 2200,
        portrait: true,
      },
    ],
  },
  {
    slug: 'enterprise-employee-system',
    year: '2025',
    kind: 'enterprise',
    tags: ['.NET 8', 'Angular 17', 'EF Core', 'Azure', 'SQL Server', 'CI/CD'],
    stack: {
      backend: '.NET 8 Web API, Entity Framework Core',
      frontend: 'Angular 17+, Angular Material, RxJS',
      cloud: 'Azure App Service, Azure SQL, Application Insights',
      devops: 'GitHub Actions (build, test, deploy)',
    },
    links: {
      source: 'https://github.com/RiandryDevelop/EnterpriseEmployeeSystem',
    },
    // TODO: drop screenshots into public/images/enterprise-employee-system/.
    media: [],
  },
  {
    slug: 'the-roulette-game',
    year: '2025',
    kind: 'game',
    tags: ['Vue 3', 'TypeScript', 'Pinia', '.NET', 'SQL Server', 'Docker'],
    stack: {
      frontend: 'Vue 3, TypeScript, Pinia',
      backend: '.NET Web API, SQL Server',
      infra: 'Docker Compose',
    },
    links: {
      source:
        'https://github.com/RiandryDevelop/Prueba-Tecnica-RiandryConnor-El-Juego-de-la-Ruleta',
    },
    media: [
      { type: 'image', src: '/images/roulette-game/cover.png', width: 1366, height: 768 },
    ],
  },
];

/** Slugs in order, used for prev/next links on case study pages. */
export const projectSlugs = projects.map((p) => p.slug);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug) || null;
