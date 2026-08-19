const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Knowledge = require("../models/Knowledge");

dotenv.config();

const knowledgeData = [
  // =========================================================
  // ABOUT
  // =========================================================

  {
    title: "About Sajid Ahmed",
    category: "about",
    content:
      "Sajid Ahmed is an AI Integration & RAG focused Full Stack/MERN Developer with 3+ years of professional experience building scalable web applications, SaaS platforms, admin dashboards, OTT platforms and eCommerce solutions. His primary technologies include React.js, Next.js, TypeScript, Node.js, Express.js and MongoDB. He also has experience with Generative AI, RAG, Gemini APIs, embeddings, semantic retrieval, REST APIs, responsive UI development, API integrations, CI/CD deployment, GitHub and Vercel.",
    source: "resume",
  },

  {
    title: "Sajid's Professional Profile",
    category: "about",
    content:
      "Sajid is a frontend-focused MERN Stack Developer who has expanded his expertise into AI integration and Retrieval-Augmented Generation. His experience covers frontend architecture, reusable React components, REST API integration, backend development, database modeling, authentication, state management, analytics, eCommerce functionality, real-time notifications and AI-powered applications.",
    source: "resume",
  },

  // =========================================================
  // AI / RAG
  // =========================================================

  {
    title: "AI Integration and RAG Skills",
    category: "ai",
    content:
      "Sajid has hands-on experience with Generative AI, Retrieval-Augmented Generation (RAG), Gemini API, Gemini embeddings, vector embeddings, vector similarity search, semantic retrieval, AI agents, prompt engineering and context engineering. He has implemented an AI-powered assistant for his personal portfolio that answers questions using portfolio-specific knowledge.",
    source: "resume",
  },

  {
    title: "AI Portfolio Assistant",
    category: "ai",
    content:
      "Sajid developed a custom AI-powered conversational assistant for his personal React portfolio. The assistant allows visitors to ask questions about Sajid's skills, professional experience, projects, technical background and education.",
    source: "resume",
  },

  {
    title: "RAG Pipeline Architecture",
    category: "ai",
    content:
      "Sajid implemented a Retrieval-Augmented Generation pipeline using React, Node.js, Express.js, MongoDB and Google Gemini. The complete flow is React Chat UI → Node.js/Express API → Query Embedding → MongoDB Similarity Search → Relevant Context Retrieval → Gemini Response Generation.",
    source: "resume",
  },

  {
    title: "Gemini Embeddings",
    category: "ai",
    content:
      "Sajid integrated Google's Gemini embedding model gemini-embedding-001 to generate vector embeddings for portfolio knowledge documents and incoming user queries. These embeddings are used for semantic similarity search and retrieval of relevant portfolio information before generating an AI response.",
    source: "resume",
  },

  {
    title: "AI Chatbot Conversation Handling",
    category: "ai",
    content:
      "Sajid's portfolio AI assistant supports conversational interactions by sending conversation history along with the current user question. The backend uses conversation history to understand references such as he, his role, that company, that project and other contextual references.",
    source: "portfolio",
  },

  {
    title: "AI Chatbot Semantic Cache",
    category: "ai",
    content:
      "Sajid implemented caching for the portfolio AI assistant. The system first checks for an exact normalized question and then performs semantic cache retrieval using the question embedding. Similar questions can reuse previously generated answers, reducing unnecessary AI generation requests and improving response efficiency.",
    source: "portfolio",
  },

  // =========================================================
  // FRONTEND SKILLS
  // =========================================================

  {
    title: "Frontend Development Skills",
    category: "skills",
    content:
      "Sajid's frontend development skills include HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, React Router, Material UI, AntD, ShadCN and Responsive Design. He focuses on reusable components, responsive interfaces, production-ready UI development and Figma-to-code implementation.",
    source: "resume",
  },

  {
    title: "React and Next.js Experience",
    category: "skills",
    content:
      "Sajid has professional experience developing applications using React.js and Next.js. His React experience includes reusable components, state management, REST API integration, responsive interfaces, dashboards, authentication flows and interactive workflows. He has also developed responsive landing pages using Next.js.",
    source: "resume",
  },

  {
    title: "UI and Design Implementation",
    category: "skills",
    content:
      "Sajid has experience converting Figma designs into reusable, responsive and pixel-perfect React interfaces. At GE Solutions, he converted 20+ Figma designs into reusable React components and achieved 95%+ mobile usability scores.",
    source: "resume",
  },

  // =========================================================
  // BACKEND
  // =========================================================

  {
    title: "Backend Development Skills",
    category: "skills",
    content:
      "Sajid works with Node.js, Express.js and MongoDB for backend development. His experience includes REST APIs, CRUD APIs, API integrations, backend services, database models and server-side application logic. He has also worked with WebSocket, OAuth and JWT Authentication.",
    source: "resume",
  },

  {
    title: "API Development and Integration",
    category: "skills",
    content:
      "Sajid has experience building and integrating REST APIs. At GE Solutions, he integrated 30+ REST APIs using Axios and Redux Toolkit. At WeSudo, he built 10+ CRUD APIs using Node.js and Express.js. His experience also includes third-party API integrations and Gemini API integration.",
    source: "resume",
  },

  // =========================================================
  // STATE / AUTH / REALTIME
  // =========================================================

  {
    title: "State Management",
    category: "skills",
    content:
      "Sajid has experience with Redux, Redux Toolkit, Zustand and Context API. At Mangotech Solutions, he centralized application state management using Redux and Zustand across 15+ screens.",
    source: "resume",
  },

  {
    title: "Authentication and Authorization",
    category: "skills",
    content:
      "Sajid has experience with OAuth, JWT Authentication and role-based access control. At GE Solutions, he implemented role-based access control and navigation across 10+ ERP modules. In his eCommerce project, he implemented Google Authorization for secure user login.",
    source: "resume",
  },

  {
    title: "Real-Time Communication and Notifications",
    category: "skills",
    content:
      "Sajid has experience implementing WebSocket-based real-time notifications and Push Notifications. His eCommerce project allows users to receive instant updates while using the application and notifications for important background activities.",
    source: "resume",
  },

  // =========================================================
  // PROFESSIONAL EXPERIENCE
  // =========================================================

  {
    title: "Mangotech Solutions Experience",
    category: "experience",
    content:
      "Sajid worked as a Frontend Developer at Mangotech Solutions in Karachi from September 2024 to August 2026. He translated 35+ reusable UI components and interactive workflows, integrated 10+ Material UI charts, centralized state management using Redux and Zustand across 15+ screens, integrated Google Analytics, event tracking and video analytics with 10+ tracked events, and enhanced navigation across 35+ client-side interfaces and admin dashboards.",
    source: "resume",
  },

  {
    title: "GE Solutions Experience",
    category: "experience",
    content:
      "Sajid worked as a React JS Developer at GE Solutions in Karachi from September 2023 to July 2024. He converted 20+ Figma designs into reusable React components, achieving 95%+ mobile usability scores, integrated 30+ REST APIs using Axios and Redux Toolkit, integrated 10+ AntD charts, and implemented role-based access control and navigation across 10+ ERP modules.",
    source: "resume",
  },

  {
    title: "WeSudo Experience",
    category: "experience",
    content:
      "Sajid worked as a MERN Stack Developer at WeSudo in Karachi from January 2023 to June 2023. He built 10+ CRUD APIs using Node.js and Express.js, created a Grammar Correction App using React.js and Node.js with 2 third-party APIs for plagiarism checking, converted 3+ Figma designs into pixel-perfect responsive websites, enhanced accessibility through customizable themes, typography controls and contrast settings, engineered a Shopify application using Shopify APIs, and developed backend services and database models for accessibility products.",
    source: "resume",
  },

  // =========================================================
  // PROJECTS
  // =========================================================

  {
    title: "Portfolio Website and AI-Powered Assistant",
    category: "projects",
    content:
      "Sajid developed his personal portfolio website and AI-powered assistant from scratch. The project uses React.js for the frontend and Node.js, Express.js and MongoDB for the backend. The AI assistant is implemented as a RAG-based AI agent that allows visitors to ask questions about Sajid's skills, experience, projects and technical background.",
    source: "resume",
  },

  {
    title: "Portfolio AI Assistant Technology Stack",
    category: "projects",
    content:
      "The portfolio AI assistant uses React Chat UI, Node.js, Express.js, MongoDB, Google Gemini embeddings, semantic similarity search and Gemini response generation. The backend exposes health-check and AI knowledge endpoints and is deployed on Vercel.",
    source: "resume",
  },

  {
    title: "Portfolio AI Assistant Deployment",
    category: "projects",
    content:
      "Sajid configured environment variables, CORS and MongoDB Atlas for the AI portfolio project and deployed the backend API on Vercel. The React frontend communicates with the deployed Node.js/Express backend.",
    source: "resume",
  },

  {
    title: "E-Commerce Website and Dashboard",
    category: "projects",
    content:
      "Sajid architected a custom eCommerce website and dashboard from scratch as a MERN Stack Developer. The project started in August 2025 and includes Google Authorization, payment gateway integration, product filtration, shopping cart functionality, an admin dashboard, WebSocket real-time notifications and Push Notifications.",
    source: "resume",
  },

  {
    title: "E-Commerce Authentication",
    category: "projects",
    content:
      "Sajid implemented Google Authorization in the eCommerce application to allow users to securely access their accounts using Google credentials without going through a lengthy manual registration process.",
    source: "resume",
  },

  {
    title: "E-Commerce Payment Gateway",
    category: "projects",
    content:
      "Sajid integrated a secure Payment Gateway into the eCommerce application, allowing users to complete online purchases through the checkout process.",
    source: "resume",
  },

  {
    title: "E-Commerce Product Filtration and Cart",
    category: "projects",
    content:
      "Sajid developed product filtration and shopping cart functionality for the eCommerce application. Users can search and filter products, add products to their cart, update quantities and manage selected items before checkout.",
    source: "resume",
  },

  {
    title: "E-Commerce Admin Dashboard",
    category: "projects",
    content:
      "Sajid built an Admin Dashboard for the eCommerce application to manage website content, categories and products. Administrators can add, update, delete and organize products and website information through a centralized interface.",
    source: "resume",
  },

  {
    title: "OTT Learning Platform",
    category: "projects",
    content:
      "Sajid developed an OTT learning platform using React.js and Material UI. The project included an admin dashboard and API integration for managing and displaying application data.",
    source: "portfolio",
  },

  {
    title: "Dubai eCommerce Website",
    category: "projects",
    content:
      "Sajid developed an eCommerce website for a Dubai-based business using React.js and Material UI. The project included API integration with Axios, authentication using Context API and shopping cart management using Redux.",
    source: "portfolio",
  },

  {
    title: "Car Detailing Landing Page",
    category: "projects",
    content:
      "Sajid developed a responsive landing page for a car detailing business using Next.js. The project focused on creating a modern, responsive and user-friendly web experience.",
    source: "portfolio",
  },

  {
    title: "Admin Dashboard",
    category: "projects",
    content:
      "Sajid developed an admin dashboard with dynamic blog and banner management functionality. The project included CKEditor 5 for rich text content management.",
    source: "portfolio",
  },

  {
    title: "Grammar Correction Application",
    category: "projects",
    content:
      "At WeSudo, Sajid developed a Grammar Correction App using React.js and Node.js and integrated 2 third-party APIs for plagiarism-related functionality.",
    source: "resume",
  },

  {
    title: "Shopify Application",
    category: "projects",
    content:
      "At WeSudo, Sajid engineered a Shopify application integrated with Shopify APIs to automate store workflows and improve merchant productivity.",
    source: "resume",
  },

  // =========================================================
  // SERVICES
  // =========================================================

  {
    title: "Web Development Services",
    category: "services",
    content:
      "Sajid can work on React.js and MERN Stack web applications, responsive frontend interfaces, admin dashboards, SaaS applications, eCommerce applications, REST API integration and full-stack web development.",
    source: "portfolio",
  },

  {
    title: "AI Integration Services",
    category: "services",
    content:
      "Sajid can integrate Generative AI capabilities into web applications, including Gemini API integration, embeddings, Retrieval-Augmented Generation, semantic retrieval and AI-powered conversational assistants.",
    source: "resume",
  },

  {
    title: "RAG and AI Assistant Development",
    category: "services",
    content:
      "Sajid can build knowledge-based AI assistants using RAG architecture, embeddings, semantic similarity search, MongoDB and Gemini APIs. His portfolio AI assistant demonstrates this capability in a production-deployed project.",
    source: "resume",
  },

  {
    title: "Figma to React Development",
    category: "services",
    content:
      "Sajid can convert Figma or PSD designs into responsive, production-ready React.js web applications with reusable components and accurate UI implementation.",
    source: "portfolio",
  },

  {
    title: "eCommerce Development Services",
    category: "services",
    content:
      "Sajid can develop custom eCommerce applications with product filtering, shopping carts, authentication, payment gateway integration, admin dashboards and real-time notifications.",
    source: "resume",
  },

  // =========================================================
  // TOOLS / DEVOPS
  // =========================================================

  {
    title: "Development Tools and Technologies",
    category: "skills",
    content:
      "Sajid's tools and technologies include Axios, REST APIs, API Integration, Postman, Redux, Redux Toolkit, Zustand, Context API, Firebase, Google Analytics, React Native, Git, GitHub, Agile/Scrum, CI/CD and Vercel.",
    source: "resume",
  },

  {
    title: "Deployment and CI/CD",
    category: "skills",
    content:
      "Sajid has experience with Git, GitHub, CI/CD and Vercel deployment. His portfolio AI backend is deployed on Vercel and connected to a React frontend, with MongoDB Atlas used for database storage.",
    source: "resume",
  },

  // =========================================================
  // EDUCATION
  // =========================================================

  {
    title: "Hybrid Web and Mobile Application Development Education",
    category: "education",
    content:
      "Sajid Ahmed completed Hybrid Web and Mobile Application Development at Sir Adamjee Institute of Management Science in Karachi from 2022 to 2023. Module A covered HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Firebase and GitHub. Module B covered MongoDB, Express.js, React.js, Node.js, React Native, REST APIs and API integrations.",
    source: "resume",
  },

  {
    title: "Intermediate in Commerce Education",
    category: "education",
    content:
      "Sajid Ahmed completed Intermediate in Commerce at Government Premier College in Karachi from 2013 to 2016. His coursework included Principles of Commerce, Principles of Accounting, Business Mathematics, Economics, English, Urdu, Principles of Banking, Business Statistics and Geography.",
    source: "resume",
  },

  {
    title: "Matriculation in Computer Science Education",
    category: "education",
    content:
      "Sajid Ahmed completed Matriculation in Computer Science at Hill Crest School System from 2011 to 2012. His coursework included Computer Science, Chemistry, Pakistan Studies, English, Sindhi, Physics, Mathematics and Islamiyat.",
    source: "resume",
  },

  // =========================================================
  // CONTACT
  // =========================================================

  {
    title: "Contact Sajid",
    category: "contact",
    content:
      "Sajid Ahmed's professional email is sajid.ahmed2816@gmail.com. His phone and WhatsApp number is +923240258505. His portfolio is sajid-mern-dev.vercel.app. His LinkedIn username is sajid-ahmed-8a60073 and his GitHub username is sajid-ahmed2816. He is located in Karachi, Pakistan.",
    source: "resume",
  },

  // =========================================================
  // PROFESSIONAL SUMMARY
  // =========================================================

  {
    title: "Sajid's Core Technical Stack",
    category: "skills",
    content:
      "Sajid's core technical stack includes React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, REST APIs, Redux, Zustand, Context API, Material UI, AntD, Tailwind CSS, WebSocket, OAuth, JWT, Gemini API, RAG, embeddings, vector similarity search, AI agents, prompt engineering, GitHub and Vercel.",
    source: "resume",
  },

  {
    title: "Sajid's Current Career Focus",
    category: "about",
    content:
      "Sajid's current professional positioning is AI Integration & RAG combined with Full Stack/MERN Development. His profile combines 3+ years of web development experience with hands-on experience building AI-powered applications using Gemini APIs, embeddings and RAG architecture.",
    source: "resume",
  },
];

const seedKnowledge = async () => {
  try {
    await connectDB();

    await Knowledge.deleteMany({});

    await Knowledge.insertMany(knowledgeData);

    console.log(
      `${knowledgeData.length} knowledge documents inserted successfully`
    );

    process.exit(0);
  } catch (error) {
    console.error("Knowledge seeding failed:", error.message);
    process.exit(1);
  }
};

seedKnowledge();