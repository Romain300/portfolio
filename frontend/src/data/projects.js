const projects = [
  {
    id: "1",
    title: "PixTag",
    description:
      "An interactive web-based game where players find hidden characters and compete for the fastest completion time.",
    longDescription:
      "PixTag is a full-stack application with a React frontend and Node.js backend. It features a leaderboard system, AI-powered hints, and a responsive UI. The project focuses on clean architecture, game logic, and scalable backend design.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "OpenAI API",
      "CSS Modules",
      "Vite"
    ],
    features: [
      "Interactive image-based character search",
      "Time-based scoring with leaderboard",
      "AI-powered hint system",
      "Responsive UI",
      "REST API backend"
    ],
    github: "https://github.com/Romain300/Photo-Tagging-App",
    live: {
      main: "https://pixtag.netlify.app/",
    },
    image: "images/pixtagApp.png",
    category: "Full-Stack",
    highlight: true
  },

  {
    id: "2",
    title: "Full-Stack Blog Platform",
    description:
      "A blog platform with a public site and admin dashboard for managing posts and comments.",
    longDescription:
      "This project is a full-stack blog application with a Node.js/Express backend API and two React frontends (admin and public). It includes JWT authentication, role-based access, and full CRUD functionality for posts and comments. Admins can publish, update, and moderate content, while users can browse posts and interact through comments.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT",
      "Passport.js",
      "React Router"
    ],
    features: [
      "Public blog with posts and comments",
      "Admin dashboard for content management",
      "JWT authentication and protected routes",
      "Publish/unpublish posts",
      "Comment moderation system",
      "Full CRUD operations",
      "Separate frontends for admin and users"
    ],
    github: "https://github.com/Romain300/blog-project",
    live: {
      public: "https://romain300-blog-public.netlify.app/",
      admin: "https://romain300-blog-admin.netlify.app/"
    },
    image: "images/blogPic.png",
    category: "Full-Stack",
    highlight: false
  },

  {
    id: "3",
    title: "Resume Builder Web App",
    description:
      "Create, preview, and download professional resumes as PDFs in real time.",
    longDescription:
      "A React-based application that allows users to input their information and generate a PDF resume using html2canvas and jsPDF. The app focuses on dynamic rendering and user-friendly design.",
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "HTML/CSS",
      "html2canvas",
      "jsPDF"
    ],
    features: [
      "Real-time preview",
      "Structured user input forms",
      "PDF export",
      "Responsive design",
      "Support for social links"
    ],
    github: "https://github.com/Romain300/CV-Application",
    live: {
      main:"https://resume-builderromain300.netlify.app/"
    },
    image: "images/resumeApp.png",
    category: "Frontend",
    highlight: false
  },

  {
    id: "4",
    title: "File Uploader",
    description:
      "A full-stack application for uploading, organizing, and sharing files with secure, expirable links.",
    longDescription:
      "This project is a Node.js and Express application that allows users to upload files to Cloudinary, organize them into folders, and generate secure shareable links with expiration. It features authentication with Passport.js, session persistence using PostgreSQL, and a modular backend architecture with Prisma.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Passport.js",
      "Cloudinary",
      "EJS",
      "Multer",
      "NanoID"
    ],
    features: [
      "User authentication with sessions",
      "Upload and manage files in folders",
      "Cloudinary integration for file storage",
      "Expirable and revocable share links",
      "Folder creation, renaming, and deletion",
      "Server-rendered UI with EJS"
    ],
    github: "https://github.com/Romain300/File-Uploader",
    live: {
      main: "https://file-uploader-production-1999.up.railway.app/"
    },
    image: "images/fileUploader.png",
    category: "Full-Stack",
    highlight: true
  },

  {
    id: "5",
    title: "Members Only Platform",
    description:
      "A message board application with authentication and role-based access control.",
    longDescription:
      "This project is a Node.js and Express web application implementing user authentication and authorization using Passport.js. Users can create accounts, post messages, and upgrade their membership, while admins have additional privileges such as deleting messages and managing user roles.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Passport.js",
      "EJS",
      "bcryptjs",
      "express-session"
    ],
    features: [
      "User registration and login",
      "Session-based authentication",
      "Role-based access (member and admin)",
      "Create and manage messages",
      "Admin controls for deleting messages and promoting users",
      "Protected routes with middleware"
    ],
    github: "https://github.com/Romain300/Project-Members-Only", 
    live: {
      main: "none"
    },
    image: "none",
    category: "Backend",
    highlight: false
  },

  {
    id: "6",
    title: "Game Inventory Manager",
    description:
      "A web application to manage a collection of video games with genres and developers.",
    longDescription:
      "This project is a CRUD-based Node.js application that allows users to manage a video game collection. It supports many-to-many relationships between games, genres, and developers, demonstrating relational database design and structured backend logic.",
    tech: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "EJS",
      "JavaScript",
      "CSS"
    ],
    features: [
      "Add, update, and delete games",
      "Manage genres independently",
      "Many-to-many relationships between data",
      "Filter games by genre",
      "Server-rendered views with EJS"
    ],
    github: "https://github.com/Romain300/Inventory-Application", 
    live: {
      main: "https://inventory-application-production-7468.up.railway.app/",
    },
    image: "images/inventoryApp.png",
    category: "Backend",
    highlight: false
  },

  {
    id: "7",
    title: "Pokémon Memory Game",
    description:
      "A React-based memory game where players must avoid selecting the same Pokémon twice.",
    longDescription:
      "This project is a frontend React application that fetches Pokémon data from an external API and challenges users to remember their selections. It focuses on state management, dynamic rendering, and interactive UI design.",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "PokéAPI"
    ],
    features: [
      "Dynamic card grid with API data",
      "Score and best score tracking",
      "Card shuffling after each move",
      "Responsive design",
      "Interactive hover effects"
    ],
    github: "https://github.com/Romain300/Memory-Card-Game", 
    live: {
      main: "https://memorycardgameromain300.netlify.app/",
    },
    image: "images/memoryGame.png",
    category: "Frontend",
    highlight: false
  },

  {
    id: "8",
    title: "Battleship Game",
    description:
      "A browser-based Battleship game with single-player and local multiplayer modes.",
    longDescription:
      "This project is a JavaScript implementation of the classic Battleship game. It uses object-oriented programming principles to manage game logic, including players, ships, and gameboards. The application features both single-player (against a computer) and two-player modes with dynamic UI updates.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    features: [
      "Single-player mode against computer",
      "Local multiplayer mode",
      "OOP-based game architecture",
      "Dynamic DOM updates",
      "Automatic ship placement",
      "Win condition detection"
    ],
    github: "https://github.com/Romain300/Battleship",
    live: {
      main: "https://romain300.github.io/Battleship/",
    },
    image: "images/battleship.png",
    category: "Frontend",
    highlight: false
  }
];

export default projects;