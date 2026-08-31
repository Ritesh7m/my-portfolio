import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

export const projects = [
  {
    id: "study-notion",
    title: "E-Learning Platform",
    tagline: "Ed-Tech Platform with Course Management & Payments",
    category: "Full Stack / EdTech",
    featured: true,
    image: Project2,
    shortDescription:
      "A comprehensive MERN-based ed-tech platform featuring role-based dashboards, HD video course streaming, Razorpay payment processing, and interactive student progress tracking.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Cloudinary",
      "REST APIs",
    ],
    codeLink: "https://github.com/Ritesh7m/StudyNotion",
    demoLink: "https://studywebapp.vercel.app/",
    details: {
      overview:
        "Built a complete full-stack education marketplace modeled after industry standards. Provides dedicated role-based portals for instructors to publish curriculum and students to consume multimedia courses.",
      problem:
        "Building a unified learning ecosystem requires handling decoupled user permissions, protected multimedia streaming, transactional checkout workflows, and state synchronization across complex course trees.",
      solution:
        "Engineered a decoupled MERN architecture with secure JWT token authentication, role-based middleware validation (Student/Instructor/Admin), Cloudinary media pipelines for high-definition video assets, and seamless payment verification.",
      features: [
        "Role-based access control for students, instructors, and platform administrators",
        "Secure course creation workflow with section & lecture nesting",
        "Integrated payments with instant order confirmation and course enrollment",
        "Responsive media player with video progress state persistence",
        "Student rating and review system with real-time feedback",
      ],
      architecture:
        "React frontend consuming RESTful endpoints hosted on Express.js; MongoDB database with populated schemas for courses, sections, sub-sections, and progress logs; Cloudinary for media storage.",
      challenges:
        "Managing deeply nested database relations for curriculum updates while keeping response times fast and ensuring media playback remains responsive across network conditions.",
    },
  },
  {
    id: "rs-enterprises",
    title: "R.S Enterprises RO System Website",
    tagline: "Commercial Platform with Dynamic Catalog & Inquiries",
    category: "Full Stack / E-Commerce",
    featured: true,
    image: Project1,
    shortDescription:
      "A full-stack business web application built for an RO water purification enterprise. Includes dynamic product listings, service request workflows, inquiry handling, and a dedicated admin portal.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "REST APIs",
    ],
    codeLink: "https://github.com/Ritesh7m/Rs-ecommerce",
    demoLink: "https://rsenterprisesapp.vercel.app/",
    details: {
      overview:
        "Designed and implemented a modern commercial web presence for R.S Enterprises, transforming their customer acquisition channel from offline inquiries into an automated online platform.",
      problem:
        "The business required an easy-to-navigate product catalog for industrial and residential RO units, along with a reliable way to capture service maintenance inquiries with image verification.",
      solution:
        "Developed a responsive Next.js application with Tailwind CSS for rapid styling, server-side data fetching for search engine visibility, and a password-protected admin dashboard allowing the business owner to update catalog items and manage leads.",
      features: [
        "Dynamic product filtering by purification technology and capacity",
        "Lead inquiry form with direct admin notification and status tracking",
        "Admin control panel with Cloudinary image upload integration",
        "Service booking and routine maintenance scheduler interface",
        "Mobile-optimized design tailored for quick browsing on handheld devices",
      ],
      architecture:
        "Next.js full-stack setup with API routes interfacing MongoDB via Mongoose; Cloudinary CDN for product photography and specification sheets.",
      challenges:
        "Ensuring rapid mobile load times over slower 3G/4G cellular networks by optimizing image delivery and reducing client-side bundle size.",
    },
  },
  {
    id: "quick-paste",
    title: "QuickPaste",
    tagline: "Instant Text & Code Snippet Sharing Utility",
    category: "Web Application / Productivity",
    featured: false,
    image: Project3,
    shortDescription:
      "A lightweight pastebin utility for storing, managing, and sharing code snippets or plain text instantly. Features public/private visibility toggles and direct shareable URLs without mandatory registration.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
    ],
    codeLink: "https://github.com/Ritesh7m/Quick-paste",
    demoLink: "https://rpaste.vercel.app/",
    details: {
      overview:
        "QuickPaste was designed as a frictionless developer utility for instant note and code distribution across team members and remote collaborators.",
      problem:
        "Most snippet tools require account signups, slow UI flows, or bloated overhead when a developer simply needs to share formatted code or logs across devices.",
      solution:
        "Engineered a zero-friction pastebin with optimistic client-side state powered by Redux, persistent MongoDB storage, one-click link generation, and granular privacy controls.",
      features: [
        "Instant snippet creation with markdown and code formatting support",
        "Public vs. private paste access controls via unique identifier URLs",
        "One-click clipboard copy of direct links and formatted raw content",
        "Recent paste history management with local caching support",
        "Clean, distraction-free interface focused on readability",
      ],
      architecture:
        "React client managing active editor states via Redux; Express server handling CRUD endpoints; MongoDB storing paste documents with TTL and privacy flags.",
      challenges:
        "Handling raw code string escaping safely to prevent XSS attacks while preserving indentation, tabs, and special characters across syntax languages.",
    },
  },
  {
    id: "leetstatus",
    title: "Leetstatus",
    tagline: "Real-time LeetCode Metrics & Profile Visualizer",
    category: "Developer Tool / Analytics",
    featured: false,
    image: Project4,
    shortDescription:
      "A React-based developer tool that visualizes LeetCode problem-solving progress. Fetches live user statistics, breakdown by difficulty (Easy, Medium, Hard), and account submission metrics.",
    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "CSS",
    ],
    codeLink: "https://github.com/Ritesh7m/leetcode-status",
    demoLink: "https://leetstatus.vercel.app/",
    details: {
      overview:
        "An intuitive analytics tool tailored for competitive programmers and job applicants to cleanly showcase their algorithmic practice statistics in a unified dashboard.",
      problem:
        "Retrieving and reviewing clean visual breakdowns of competitive programming statistics across platforms often requires navigating cluttered web interfaces.",
      solution:
        "Created a focused dashboard that queries public metrics, transforms JSON payloads into clean visual summaries, and displays difficulty distributions with high clarity.",
      features: [
        "Instant profile lookup by username with error boundary handling",
        "Difficulty breakdown (Easy, Medium, Hard) with visual proportion bars",
        "Total solved problem counts, acceptance rates, and join date metadata",
        "Card view optimized for embeddable screenshots and portfolio verification",
        "Responsive layout adapted for desktop and mobile displays",
      ],
      architecture:
        "Single-page React application consuming public API endpoints, caching query results in session state to prevent repetitive lookups.",
      challenges:
        "Handling CORS restrictions, third-party API rate limits, and graceful error states when invalid usernames or unranked accounts are searched.",
    },
  },
];
