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
    { year: 2021, text: "Started my journey with small freelance projects and hands-on practice." },
    {year:2022, text:"Expanded my skills by learning new technologies and contributing to various projects."},
    {year:2023, text:"Joined a company as a software engineer while continuing to grow through personal and freelance work."},
    {year:2024, text:"Delivered frontend and backend solutions as a consultant in diffents industries while also managing freelance projects."},
    {year:2025, text: "Continuing my consulting work, contributing to complex software solutions in the banking sector and expanding my expertise across new technologies."} 
];