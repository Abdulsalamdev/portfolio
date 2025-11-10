export type ProjectType = {
  id: string;
  title: string;
  category: "frontend" | "backend" | "fullstack";
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  slug: string;
  description: string;
};

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "Portfolio Website",
    slug: "portfolio-website",
    category: "fullstack",
    description:
      "A modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features dark/light theme, animations, and project filtering.",
    image: "/projects/profile.png",
    liveUrl: "https://abdulsalamakinyoola.vercel.app",
    codeUrl: "https://github.com/Abdulsalamdev/portfolio",
  },

  {
    id: "2",
    title: "File Service",
    slug: "file-service",
    category: "backend",
    description:
      "FileVault is a secure file and folder management system with both a CLI interface and a RESTful API, built using Node.js, MongoDB, and Redis. It allows authenticated users to manage files and folders with hierarchical structure, public/private access, and user-level permissions.",
    // image: "/projects/notes-api.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Abdulsalamdev/File-vault",
  },
  {
    id: "3",
    title: "string analyzer service",
    slug: "string-analyzer",
    category: "backend",
    description:
      "Natural Language String Analyzer 🔍 A RESTful API that analyzes strings — detects palindromes, counts words, computes SHA-256 hashes, and even filters strings using natural language queries",
    // image: "/projects/notes-api.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Abdulsalamdev/string-analyzer-service",
  },
  {
    id: "4",
    title: "Blog CMS",
    slug: "blog-cms",
    category: "fullstack",
    description:
      "A content management system for blogging, built with Next.js 14, Tailwind CSS, and MongoDB. Supports markdown editing, authentication, and admin dashboard.",
    image: "/projects/fullstack.png",
    liveUrl: "https://www.honestscholars.org/",
    codeUrl: "#",
  },
  {
    id: "5",
    title: "TaskNest App",
    slug: "tasknest",
    category: "frontend",
    description:
      "TaskNest is a modern, responsive to-do app with animations, dark mode, and drag-and-drop support. Built using clean UI/UX principles with HTML, CSS, and Vanilla JavaScript.",
    image: "/projects/tasknest.png",
    liveUrl: "https://tasknest2.netlify.app/",
    codeUrl: "https://github.com/Abdulsalamdev/tasknest",
  },
  {
    id: "6",
    title: "Tutordeck App",
    slug: "tutordeck",
    category: "frontend",
    description:
      "Tutordeck, Creative Digital Agency Website A modern, responsive creative agency website showcasing Tutordeck’s design and development services. Features sections for About, Services, Testimonials, and Contact. Built with clean UI/UX principles to highlight creativity, innovation, and professionalism.",
    image: "/projects/tutordeck.png",
    liveUrl: "https://create-tutordeck.netlify.app/",
    codeUrl: "https://github.com/Abdulsalamdev/Tutordeck",
  },
  {
    id: "7",
    title: "CarePluse",
    slug: "hospital-api",
    category: "backend",
    description:
      "A robust and scalable backend API for hospital management, providing endpoints for patient appointments, doctor management, user authentication, and administrative functionalities. Built with Node.js, Express, and MongoDB.",
    // image: "/projects/auth-api.png",
    liveUrl: "#",
    codeUrl: "https://github.com/Abdulsalamdev/CarePluse-backend",
  },
  {
    id: "8",
    title: "Color flipper",
    slug: "color-flipper",
    category: "frontend",
    description:
      "Color Flipper , A fun and interactive landing page that lets users explore named colors on the main page and generate random hex colors on a dedicated hex page, instantly changing the background.",
    image: "/projects/color.png",
    liveUrl: "https://create-color-flipper.netlify.app/",
    codeUrl: "https://github.com/Abdulsalamdev/color-flipper",
  },
  {
    id: "9",
    title: "NaijaAir Frontend",
    slug: "naijaAir-frontend",
    category: "frontend",
    description:
      "NaijaAir Landing Page , A clean and engaging travel landing page showcasing top destinations, services, and customer satisfaction, designed to attract travelers and help them explore, plan, and book trips easily.",
    image: "/projects/niaja.png",
    liveUrl: "https://create-vacation-web.netlify.app/",
    codeUrl: "https://github.com/Abdulsalamdev/vacation-website",
  },
];
