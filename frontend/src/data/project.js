const projects = [
  {
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
    live: "https://pixtag.netlify.app/",
    image: "/images/pixtag.png",
    category: "Full-Stack",
    highlight: true
  },

  {
    title: "Full-Stack Blog Platform",
    description:
      "A blog platform with a public site and admin dashboard for managing posts and comments.",
    longDescription:
      "This project includes a Node.js/Express backend with JWT authentication and two React frontends for admin and public users. It demonstrates full CRUD operations, secure authentication, and a scalable application structure.",
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
      "Admin dashboard",
      "JWT authentication",
      "Full CRUD operations",
      "Separate frontends for admin and users"
    ],
    github: "https://github.com/Romain300/blog-project",
    live: {
      public: "https://romain300-blog-public.netlify.app/",
      admin: "https://romain300-blog-admin.netlify.app/"
    },
    image: "/images/blog-project.png",
    category: "Full-Stack",
    highlight: false
  },

  {
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
    live: "https://resume-builderromain300.netlify.app/",
    image: "/images/resume-builder.png",
    category: "Frontend",
    highlight: false
  }
];

export default projects;