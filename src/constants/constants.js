export const projects = [
  {
    id: 0,
    title: "Instagram Business Scraper API",
    slug: "instagram-business-scraper-api",
    image: "/images/InstagramScraperAPI_edit.PNG",

    problem:
      "Empresas y agencias necesitaban automatizar la gestión de cuentas Instagram Business, acceder a datos públicos y controlar el uso de la plataforma de forma segura y escalable.",

    solution:
      "Desarrollé una API asíncrona con FastAPI que integra scraping de perfiles públicos, mensajería vía Facebook Graph API, autenticación JWT y control de planes mediante PayPal.",

    result:
      "Una arquitectura backend lista para SaaS, segura, escalable y preparada para integrarse en soluciones de marketing automation o CRM.",

    tags: [
      "Python",
      "FastAPI",
      "AsyncIO",
      "SQLAlchemy",
      "Instaloader",
      "PayPal API",
      "JWT",
    ],

    source: "https://riandrydevelop.github.io/instagram_scraper_api_public/",
  },

  {
    id: 1,
    title: "Sismo App",
    image: "/images/SismoApp_edit.PNG",
    slug: "sismo-app",
    problem:
      "Centralizar y visualizar información sísmica global en tiempo real con una interfaz rápida y fácil de usar.",

    solution:
      "Construí una aplicación full-stack con React, Vite y TailwindCSS en el frontend, y un backend en Ruby on Rails que expone una API REST para gestionar reportes y comentarios.",

    result:
      "Una plataforma moderna y escalable que ofrece información sísmica en tiempo real con una experiencia de usuario optimizada.",

    tags: [
      "React",
      "Vite",
      "TailwindCSS",
      "Ruby on Rails",
      "REST API",
      "SQLite3",
      "Playwright",
    ],

    source: "https://riandrydevelop.github.io/SismoUI",
  },

  {
    id: 2,
    title: "Library App (Mobile)",
    image: "/images/LibraryAPP_edit.PNG",
    slug: "library-app-mobile",
    problem:
      "Usuarios necesitaban una forma simple y segura de gestionar su biblioteca personal desde dispositivos móviles.",

    solution:
      "Desarrollé una aplicación móvil multiplataforma con React Native, conectada a un backend en Node.js y Express con autenticación y almacenamiento en Firebase.",

    result:
      "Una app funcional con autenticación segura y operaciones CRUD completas para la gestión de libros.",

    tags: ["React Native", "Node.js", "Express", "Firebase"],

    source: "https://github.com/RiandryDevelop/LibraryAppUI",
  },

  {
    id: 3,
    title: "The Roulette Game",
    image: "/images/RouletteGame_edit.PNG",
    slug: "the-roulette-game",

    problem:
      "Crear una experiencia de juego web interactiva donde los usuarios puedan gestionar saldo y realizar apuestas en tiempo real.",

    solution:
      "Implementé una aplicación web con Vue 3, TypeScript y Pinia para el estado, junto a un backend en .NET y SQL Server, con soporte Docker para despliegue.",

    result:
      "Un juego web completo con lógica de apuestas, persistencia de datos y arquitectura preparada para despliegue en entornos controlados.",

    tags: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      ".NET",
      "SQL Server",
      "Docker",
      "GameDev",
    ],

    source:
      "https://github.com/RiandryDevelop/Prueba-Tecnica-RiandryConnor-El-Juego-de-la-Ruleta",
  },
];

export const TimeLineData = [
    { year: 2021, text: "Comence mi carrera profesional como desarrollador web." },
    {year:2022, text:"Trabajé en varios proyectos freelance, desarrollando aplicaciones web y móviles para clientes diversos."},
    {year:2023, text:"Me uni a una empresa de consultoria tecnológica para desarrollar soluciones tecnológicas para empresas."},
    {year:2024, text:"Lleve a cabo proyectos complejos en diferentes industrias, mejorando la infraestructura tecnológica y optimizando procesos mediante soluciones personalizadas."},
    {year:2025, text: "Continue especializándome en desarrollo full-stack y ampliando mi experiencia en tecnologías emergentes."}, 
];