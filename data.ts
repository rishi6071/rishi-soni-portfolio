export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string | string[];
  skills: string[];
  logo?: string;
}

export interface Project {
  title: string;
  category: "professional" | "self";
  technologies: string[];
  description: string;
  image?: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

const data = {
  personal: {
    name: "Rishi Soni",
    title: "Frontend Engineer",
    experience: "4+ years",
    tagline:
      "With 4.5+ years of experience in React and Next.js, building high-performance and scalable web experiences.",
    technologies: ["JavaScript", "React", "Next.js", "TypeScript", "Sass"],
    profileImage: "/assets/images/hero.png", // Profile image
    resume: "/assets/documents/Resume_RishiSoni.pdf", // Resume PDF
    points: [
      {
        icon: "education",
        text: "Expert in modern frontend tech, specializing in React & Next.js, always learning and staying current with industry trends.",
      },
      {
        icon: "teamwork",
        text: "Love working in collaborative team environment but I can also work independently.",
      },
    ],
  },

  experience: [
    {
      company: "Licious",
      role: "Software Development Engineer-2 UI",
      duration: "Nov 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time • On-site",
      description: [
        "Single-handedly developed the Game-Of-Meat campaign UI for m-site and app webviews, successfully rolled out to 1.5M+ users on Android and iOS.",
        "Worked on Hub Management systems to streamline supply chain operations and ensure seamless meat delivery to customers’ doorsteps.",
        "Migrated legacy PHP systems to modern React-based consoles including Hub Management, Serviceability Console, and Planning UI for improved performance and maintainability.",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "Scss",
        "UI Development",
      ],
      logo: "/assets/logos/licious.jpeg", // Licious logo
    },
    {
      company: "Paytm",
      role: "Software Engineer",
      duration: "May 2023 - Nov 2024",
      location: "Bengaluru, Karnataka, India",
      type: "Full-time • Hybrid",
      description: [
        "Develop and maintain the mobileWeb SDK for Paytm consumer app, catering to 10+ verticals within the ecosystem, ensuring seamless integration and usability across various features such as Deals, Movies, Travel, and more.",
        "Optimized SDK performance to enhance speed, efficiency, and reliability, supporting a massive scale of 100M+ active users and 500M+ downloads.",
      ],
      skills: [
        "React",
        "JavaScript",
        "SDK development",
        "Mobile Web",
        "React Hooks",
      ],
      logo: "/assets/logos/paytm.jpeg", // Paytm logo
    },
    {
      company: "Apisero (NTT DATA)",
      role: "Software → Senior Software Engineer",
      duration: "Aug 2021 - May 2023",
      location: "Pune, Maharashtra, India",
      type: "Full-time • Remote",
      description: [
        "Started as Software Engineer working in the Robotic Process Automation (RPA) domain, automating complex time-consuming processes for US-based clients to improve operational efficiency.",
        "Promoted to Senior Software Engineer and delivered key internal platform like Learning & Development Dashboard for streamlined L&D team.",
      ],
      skills: ["React", "JavaScript", "Scss", "Dashboard Development"],
      logo: "/assets/logos/apisero.jpeg", // Apisero logo
    },
    {
      company: "Rajiv Gandhi Technical University",
      role: "Bachelor of Technology (CSE)",
      duration: "June 2018 - June 2022",
      location: "Indore, Madhya Pradesh, India",
      type: "Full-time • On-campus",
      description: "",
      skills: [],
      logo: "/assets/logos/rgpv.png", // RGPV University
    },
  ],

  skills: [
    {
      name: "JavaScript",
      icon: "js",
      description: "Strong JS knowledge and advanced web development.",
    },
    {
      name: "React",
      icon: "react",
      description: "Building fast and efficient React App's and websites.",
    },
    {
      name: "Next.js",
      icon: "nextjs",
      description: "Fast server-side rendering, dynamic routing & less code.",
    },
    {
      name: "TypeScript",
      icon: "typescript",
      description: "Type-safe development with enhanced code quality.",
    },
    {
      name: "CSS & Sass",
      icon: "sass",
      description: "I use Sass as my preferred CSS pre-processor.",
    },
    {
      name: "Redux",
      icon: "redux",
      description:
        "State management library: Manages and centralizes shared state.",
    },
    {
      name: "Git",
      icon: "git",
      description: "DevOps tool for streamlined source code management.",
    },
    {
      name: "Performance",
      icon: "performance",
      description:
        "Optimizing web applications for speed, efficiency, and better UX.",
    },
  ],

  projects: [
    {
      title: "MobileWeb SDK - Paytm",
      category: "professional",
      technologies: ["React", "JavaScript", "SCSS", "SDK", "Mobile Web"],
      description:
        "MobileWeb SDK powering Paytm's consumer app, featuring 70+ reusable UI widgets to rapidly build & deploy web-pages across 10+ verticals like Deals, Movies, Travel and many more.",
      image: "/assets/images/projects/paytm-sdk.png",
      link: "https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en",
    },
    {
      title: "Game Of Meat - Licious",
      category: "professional",
      technologies: ["Next.js", "React", "TypeScript", "SCSS", "Mobile Web"],
      description:
        "Highly engaging UI for Licious' largest yearly sale campaign, transforming the ordering journey with interactive gamification features; rolled out to 1.5M+ users on m-site and app webviews.",
      image: "/assets/images/projects/licious-gom.png",
      link: "https://play.google.com/store/apps/details?id=com.licious&hl=en",
    },
    {
      title: "Learning & Development Portal - Apisero",
      category: "professional",
      technologies: ["React", "JavaScript", "SCSS", "Material UI", "Chart.js"],
      description:
        "High-quality software for the Learning & Development team. This included creating dashboards, tracking test scores, monitoring student performance, allocating mentors, and managing multiple user roles.",
      image: "/assets/images/projects/apisero-lms.png",
    },
    {
      title: "Netflix Clone",
      category: "self",
      technologies: ["React", "JavaScript", "Axios", "Bootstrap", "API"],
      description:
        "Functional replica of Netflix in which user will get the same feel as Netflix such as Search Functionality, Collections, particular Movie Details, Trailers, Screenshots and many more (Feb, 2022).",
      image: "/assets/images/projects/netflix-clone.png",
      link: "https://rishi-netflixclone.netlify.app/",
    },
    {
      title: "E-Commerce (for Electronics)",
      category: "self",
      technologies: ["React", "JSX", "Material UI", "Commerce.js", "Stripe"],
      description:
        "JAMstack-based Electronics E-Commerce React app using Commerce.js with search, filters, cart, checkout, payments, pagination, and shimmer loading states for improved performance (Aug, 2021).",
      image: "/assets/images/projects/ecommerce.png",
    },
    {
      title: "Tic-Tac-Toe Game",
      category: "self",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "OOPS"],
      description:
        "Fully functional Tic-Tac-Toe game with clean game logic and responsive UI design. Enhanced player engagement using Lottie-based winner celebration animations (Jun, 2021).",
      image: "/assets/images/projects/tic-tac-toe.png",
      link: "https://rishi-tictactoe.netlify.app",
    },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/rishi-soni-26847717a/",
    github: "https://github.com/rishi6071",
    email: "rishisoni6071@gmail.com",
    leetcode: "https://leetcode.com/u/rishi4782/",
  },
};

export default data;
