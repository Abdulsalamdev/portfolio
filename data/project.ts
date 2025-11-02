export type ProjectType = {
  id: string
  title: string
  category: 'frontend' | 'backend' | 'fullstack'
  image?: string
  liveUrl: string
  codeUrl: string
  slug: string
  description: string
}

export const projects: ProjectType[] = [
{
    id: '1',
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
    id: '2',
    title: "Notes REST API",
    slug: "notes-api",
    category: "backend",
    description:
      "A secure and scalable REST API built with Express.js and MongoDB, supporting CRUD operations and JWT authentication.",
    // image: "/projects/notes-api.png",
    liveUrl: "https://notes-api.vercel.app",
    codeUrl: "https://github.com/yourusername/notes-api",
  },
  {
    id: '3',
    title: "E-Commerce Frontend",
    slug: "ecommerce-frontend",
    category: "frontend",
    description:
      "Frontend UI for an e-commerce platform using React, Tailwind, and Framer Motion. Features responsive product grid, cart system, and search.",
    image: "/projects/marsline.png",
    liveUrl: "https://ecommerce-frontend.vercel.app",
    codeUrl: "https://github.com/yourusername/ecommerce-frontend",
  },
  {
  id: '4',
  title: "Blog CMS",
  slug: "blog-cms",
  category: "fullstack",
  description:
    "A content management system for blogging, built with Next.js 14, Tailwind CSS, and MongoDB. Supports markdown editing, authentication, and admin dashboard.",
  image: "/projects/fullstack.png",
  liveUrl: "https://blog-cms.vercel.app",
  codeUrl: "https://github.com/yourusername/blog-cms",
},
{
  id: '5',
  title: "Task Manager App",
  slug: "task-manager",
  category: "frontend",
  description:
    "A task management UI built with React, Tailwind CSS, and Zustand for state management. Includes task creation, filtering, and animations.",
  image: "/projects/afex.png",
  liveUrl: "https://task-manager.vercel.app",
  codeUrl: "https://github.com/yourusername/task-manager",
},
{
  id: '6',
  title: "Authentication API",
  slug: "auth-api",
  category: "backend",
  description:
    "RESTful authentication API using Node.js, Express, MongoDB, and JWT. Includes registration, login, password reset, and protected routes.",
  // image: "/projects/auth-api.png",
  liveUrl: "https://auth-api.vercel.app",
  codeUrl: "https://github.com/yourusername/auth-api",
},
{
  id: '7',
  title: "Portfolio CMS Admin",
  slug: "portfolio-cms-admin",
  category: "fullstack",
  description:
    "Admin dashboard to manage portfolio content (projects, skills, services) built with Next.js App Router and MongoDB. Protected by admin login.",
  image: "/projects/niaja.png",
  liveUrl: "https://portfolio-cms-admin.vercel.app",
  codeUrl: "https://github.com/yourusername/portfolio-cms-admin",
},
{
  id: '8',
  title: "Weather Dashboard",
  slug: "weather-dashboard",
  category: "frontend",
  description:
    "Responsive weather dashboard using HTML, Tailwind CSS, and JavaScript. Fetches real-time weather using OpenWeatherMap API.",
  image: "/projects/tutordeck.png",
  liveUrl: "https://weather-dashboard.vercel.app",
  codeUrl: "https://github.com/yourusername/weather-dashboard",
}

]
