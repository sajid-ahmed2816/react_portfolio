const dotenv = require("dotenv");
const connectDB = require("../config/db");
const Knowledge = require("../models/Knowledge");

dotenv.config();

const knowledgeData = [
  // ABOUT
  {
    title: "About Sajid Ahmed",
    category: "about",
    content:
      "Sajid Ahmed is a Frontend-focused MERN Stack Developer with 3+ years of experience building scalable web applications, admin dashboards, SaaS platforms, OTT platforms and eCommerce solutions. His technical experience includes React.js, Next.js, TypeScript, Node.js, Express.js and MongoDB. He also has experience with API integrations, performance optimization, responsive UI development, Figma-to-code implementation, Agile/Scrum collaboration and CI/CD deployment using GitHub and Vercel.",
    source: "resume",
  },

  // SKILLS
  {
    title: "Frontend Development Skills",
    category: "skills",
    content:
      "Sajid's frontend development skills include HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, React Router, Material UI, AntD, ShadCN and Responsive Design. He focuses on reusable components, responsive interfaces, production-ready UI development and Figma-to-code implementation.",
    source: "resume",
  },

  {
    title: "Backend Development Skills",
    category: "skills",
    content:
      "Sajid works with Node.js, Express.js and MongoDB for backend development. His experience includes building REST APIs, API integrations, CRUD operations, backend services, database models and server-side application logic. He also has experience with WebSocket, OAuth and JWT Authentication.",
    source: "resume",
  },

  {
    title: "Development Tools and Technologies",
    category: "skills",
    content:
      "Sajid has experience with Axios, REST APIs, API Integration, Postman, Redux, Redux Toolkit, Zustand, Context API, Firebase, Google Analytics, React Native, Git, GitHub, Agile/Scrum, CI/CD and Vercel.",
    source: "resume",
  },

  // EXPERIENCE
  {
    title: "Professional Experience",
    category: "experience",
    content:
      "Sajid Ahmed is a Frontend-focused MERN Stack Developer with 3+ years of professional experience. He worked as a Frontend Developer at Mangotech Solutions from September 2024 to August 2026 in Karachi, where he worked on reusable UI components, interactive workflows, Material UI charts, Redux and Zustand state management, Google Analytics, event tracking, video analytics, client-side interfaces and admin dashboards. He worked as a React JS Developer at GE Solutions from September 2023 to July 2024 in Karachi, where he converted Figma designs into reusable React components, integrated REST APIs using Axios and Redux Toolkit, worked with AntD charts, and implemented role-based access control across ERP modules. He worked as a MERN Stack Developer at WeSudo from January 2023 to June 2023 in Karachi, where he built CRUD APIs using Node.js and Express.js, developed a Grammar Correction App, converted Figma designs into responsive websites, worked on accessibility features, developed a Shopify application using Shopify APIs, and built backend services and database models.",
    source: "resume",
  },

  // PROJECTS
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
    title: "E-Commerce Website and Dashboard",
    category: "projects",
    content:
      "Sajid architected a custom e-commerce website and dashboard from scratch as a MERN Stack Developer. The project included Google Authorization for secure login, payment gateway integration, product filtration, cart functionality, and an admin dashboard for managing website content, categories and products. The project started in August 2025.",
    source: "resume",
  },

  // SERVICES
  {
    title: "Web Development Services",
    category: "services",
    content:
      "Sajid can work on React.js and MERN Stack web applications, responsive frontend interfaces, admin dashboards, eCommerce applications, REST API integration and full-stack web development.",
    source: "portfolio",
  },

  {
    title: "Figma to React Development",
    category: "services",
    content:
      "Sajid can convert Figma or PSD designs into responsive, production-ready React.js web applications with reusable components and accurate UI implementation.",
    source: "portfolio",
  },

  // EDUCATION
  {
    title: "Education",
    category: "education",
    content:
      "Sajid Ahmed completed Hybrid Web and Mobile Application Development at Sir Adamjee Institute of Management Science in Karachi from 2022 to 2023. The program covered Frontend Development including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Firebase and GitHub, as well as MERN Stack Development including MongoDB, Express.js, React.js, Node.js, React Native, REST APIs and API integrations. He completed Intermediate in Commerce at Government Premier College in Karachi from 2013 to 2016. He completed Matriculation in Computer Science at Hill Crest School System in Karachi from 2011 to 2012.",
    source: "resume",
  },

  // CONTACT
  {
    title: "Contact Sajid",
    category: "contact",
    content:
      "Sajid can be contacted through his professional portfolio and LinkedIn profile. His professional email is sajid.ahmed2816@gmail.com.",
    source: "portfolio",
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