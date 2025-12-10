import { Experience, Project, SkillCategory, Education, SocialLink } from './types';

// Using GitHub avatar as a reliable way to get the user's photo dynamically
export const PROFILE_IMAGE = "https://github.com/ayushhh715.png";

export const PERSONAL_INFO = {
  name: "Ayush Arora",
  title: "Fullstack Web Developer",
  tagline: "Building scalable web solutions & optimizing digital experiences.",
  email: "ayushhharora@gmail.com",
  phone: "+91-8307966332",
  location: "Una, Himachal Pradesh",
  about: "I am a passionate Fullstack Web Developer and Electronics & Communication Engineering student at IIIT Una. With a knack for optimizing algorithms and building intuitive user interfaces, I specialize in the MERN stack and modern cloud infrastructures. I love solving complex problems, evident from my 400+ solved coding challenges and gold medal in Tug of War.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/ayushhh715", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/ayush-arora-b44b48257/", icon: "linkedin" },
  { platform: "LeetCode", url: "https://leetcode.com/ayushhh715/", icon: "leetcode" },
  { platform: "CodeChef", url: "https://www.codechef.com/users/ayushhh715", icon: "codechef" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "mail" },
];

export const EDUCATION: Education[] = [
  {
    institution: "Indian Institute of Information Technology, Una",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    period: "Nov 2022 – May 2026",
    location: "Una, Himachal Pradesh",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "InfraWave Solutions",
    role: "Fullstack Web Developer Intern",
    period: "Dec 2024 – Jan 2025",
    image: PROFILE_IMAGE, // Using user's photo as requested
    description: [
      "Designed RESTful APIs using Express.js and TypeScript, interfacing with React.js components, resulting in 20% faster data retrieval.",
      "Improved 8 interactive UI components using React.js and TypeScript, ensuring seamless backend integration.",
      "Organized the transition of legacy systems to AWS cloud infrastructure, reducing operational costs by 15% and improving scalability.",
      "Implemented comprehensive unit testing (Jest, React Testing Library), increasing coverage from 60% to 98%."
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Janhit: Civic Issues Platform",
    description: "A Smart Governance website for reporting and tracking civic issues with real-time mapping.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Leaflet", "Cloudinary"],
    video: "https://assets.mixkit.co/videos/preview/mixkit-view-of-a-city-at-night-from-a-drone-41214-large.mp4", // City/Map theme video
    links: {
      github: "https://github.com/ayushhh715/Janhit",
      live: "https://janhit.vercel.app/"
    },
    highlights: [
      "Enabled 30% faster civic issue reporting via real-time map-based tracking.",
      "Reduced complaint submission time by 60% with an interactive interface.",
      "Launched community voting enabling residents to prioritize public concerns."
    ]
  },
  {
    title: "FitFusionX: E-Commerce & AI",
    description: "Advanced E-commerce platform featuring Virtual Try-On capabilities using Computer Vision.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "OpenCV"],
    video: "https://assets.mixkit.co/videos/preview/mixkit-online-shopping-with-a-smartphone-4549-large.mp4", // Shopping/Tech theme video
    links: {
      github: "https://github.com/ayushhh715/Advanced-Ecommerce",
      live: "https://advance-ecommerce-beta.vercel.app/"
    },
    highlights: [
      "Integrated Virtual Try-On for real-time product previews, boosting satisfaction by 0.7 points.",
      "Improved engagement by 18% using OpenCV & MediaPipe pipelines.",
      "Secured system with JWT & bcrypt, reducing unauthorized access by 25%."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB", "PostgreSQL", "SQL"]
  },
  {
    title: "Languages",
    skills: ["JavaScript", "C++", "Python", "TypeScript"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Postman", "Linux"]
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Gold Medalist",
    description: "Tug of War, Yalgaar (IIITU)",
    icon: "medal"
  },
  {
    title: "Algorithmic Mastery",
    description: "Optimized algorithms for open-source projects",
    icon: "code"
  },
  {
    title: "Problem Solver",
    description: "Solved 400+ coding problems across various platforms",
    icon: "target"
  }
];

export const LEADERSHIP = [
  {
    role: "Technical Member",
    org: "Entrepreneurship & Incubation Cell (EIC)",
    period: "Oct 2023 – Nov 2025",
    description: "Spearheaded development of the official E-Summit website (esummit.iiitu.ac.in/), guiding a team of 15 members and elevating participant experience."
  }
];