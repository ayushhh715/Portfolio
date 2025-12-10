import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Server, 
  Layout, 
  Database,
  Cpu,
  ChevronDown,
  Trophy,
  Target,
  Zap
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SOCIAL_LINKS, 
  EXPERIENCE, 
  PROJECTS, 
  SKILLS, 
  EDUCATION,
  ACHIEVEMENTS,
  LEADERSHIP,
  PROFILE_IMAGE
} from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Icon mapping helper
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'mail': return <Mail className="w-5 h-5" />;
      case 'leetcode':
        return (
          <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.156a6.3 6.3 0 0 0-2.678.239l.23-.232c.2-.2.5-.2.7 0l.003.003a.5.5 0 0 1 .003.7l-.23.232c-.1.1-.2.15-.35.15s-.25-.05-.35-.15l-4.5-4.5a.5.5 0 0 1 0-.7.5.5 0 0 1 .7 0l4.5 4.5c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-4.5-4.5a1.37 1.37 0 0 0-1.95 0L.44 6.94a.5.5 0 0 1 0-.7.5.5 0 0 1 .7 0l5.414-5.414A1.37 1.37 0 0 0 5.594.438L1.134 4.897a.5.5 0 0 1-.7 0 .5.5 0 0 1 0-.7l4.46-4.46A1.37 1.37 0 0 0 3.933.438L.44 3.933a1.37 1.37 0 0 0 0 1.953l.965.965c.54.54 1.414.54 1.955 0s.54-1.414 0-1.955L2.396 3.933c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l.965.965c.54.54 1.414.54 1.955 0 .2-.2.5-.2.7 0l4.46 4.46c.54.54 1.414.54 1.955 0s.54-1.414 0-1.955L7.317 3.64c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l4.46 4.46c.54.54 1.414.54 1.955 0s.54-1.414 0-1.955l-4.46-4.46a1.37 1.37 0 0 0-1.955 0z" />
          </svg>
        );
      case 'codechef':
        return (
          <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12.012 1.62c-4.453 0-8.312 2.763-9.766 6.55H.61v.018a10.875 10.875 0 0 0-.022 10.158l.006.012h4.594a10.457 10.457 0 0 1-3.6-7.382c0-5.748 4.672-10.407 10.424-10.407 5.753 0 10.423 4.659 10.423 10.407 0 5.253-3.899 9.588-8.941 10.303v1.077c5.626-.723 9.975-5.525 9.975-11.38 0-6.342-5.155-11.492-11.506-11.492zm-5.02 6.568c-.78 0-1.413.628-1.413 1.402 0 .774.633 1.402 1.413 1.402.78 0 1.413-.628 1.413-1.402 0-.774-.633-1.402-1.413-1.402zm10.04 0c-.78 0-1.413.628-1.413 1.402 0 .774.633 1.402 1.413 1.402.779 0 1.412-.628 1.412-1.402 0-.774-.633-1.402-1.412-1.402zM12.012 9.1c-2.316 0-4.348.917-5.875 2.41l.94.982a7.012 7.012 0 0 1 4.935-2.028c1.983 0 3.775.83 5.043 2.164l.974-.94c-1.498-1.576-3.66-2.589-6.017-2.589zm-4.75 3.714v1.517c0 3.064 3.033 5.378 5.484 4.885v-1.393c-1.742.279-3.953-1.353-3.953-3.492v-1.517z" />
          </svg>
        );
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getAchievementIcon = (iconName: string) => {
    switch(iconName) {
        case 'medal': return <Trophy className="w-8 h-8 text-yellow-500" />;
        case 'code': return <Code2 className="w-8 h-8 text-blue-500" />;
        case 'target': return <Target className="w-8 h-8 text-red-500" />;
        default: return <Award className="w-8 h-8 text-primary-500" />;
    }
  };

  const getSkillIcon = (title: string) => {
    switch(title) {
        case 'Frontend': return <Layout className="w-6 h-6 mb-2 text-blue-500" />;
        case 'Backend': return <Server className="w-6 h-6 mb-2 text-green-500" />;
        case 'Languages': return <Code2 className="w-6 h-6 mb-2 text-purple-500" />;
        case 'Tools & DevOps': return <Cpu className="w-6 h-6 mb-2 text-orange-500" />;
        default: return <Database className="w-6 h-6 mb-2" />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
            {/* Background Magic Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-100 dark:bg-primary-900/30 dark:text-primary-400 rounded-full">
              Available for Hire
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-600">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-primary-500/30 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="#projects"
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 rounded-lg font-medium transition-all flex items-center gap-2"
              >
                <Briefcase size={18} />
                View Work
              </a>
            </div>
            
            <div className="mt-12 flex gap-6 flex-wrap">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
                  title={link.platform}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <img 
                src={PROFILE_IMAGE} 
                alt="Ayush Arora" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-white dark:border-slate-800 relative z-10 rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth'})}
        >
            <ChevronDown className="text-slate-400" size={32} />
        </motion.div>
      </section>

      {/* About & Skills Section */}
      <Section id="about" className="bg-white dark:bg-slate-900 rounded-3xl my-8 shadow-sm">
        <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
                    About Me
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {PERSONAL_INFO.about}
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                   <h3 className="font-semibold mb-4 flex items-center gap-2">
                       <GraduationCap className="text-primary-500" size={20}/> Education
                   </h3>
                   {EDUCATION.map((edu, idx) => (
                       <div key={idx} className="mb-4 last:mb-0">
                           <div className="font-medium text-slate-900 dark:text-white">{edu.institution}</div>
                           <div className="text-sm text-primary-600 dark:text-primary-400 mt-1">{edu.degree}</div>
                           <div className="text-xs text-slate-500 mt-1">{edu.period} | {edu.location}</div>
                       </div>
                   ))}
                </div>
            </div>

            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary-500 rounded-full"></span>
                    Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="skills">
                    {SKILLS.map((cat, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 transition-all hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-900"
                        >
                            <div className="flex items-center justify-between mb-4">
                                {getSkillIcon(cat.title)}
                                <span className="text-xs font-mono text-slate-400">{cat.skills.length} skills</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-4 text-slate-900 dark:text-white">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 text-sm bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-600">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                My professional journey and internships where I've created impact.
            </p>
        </div>

        <div className="relative space-y-12">
            {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Image Section - Left Side */}
                        {exp.image && (
                            <div className="md:w-1/4 flex-shrink-0 flex justify-center md:justify-start">
                                <div className="relative group w-32 h-32 md:w-full md:h-auto">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                    <img 
                                        src={exp.image} 
                                        alt={exp.company}
                                        className="relative w-full h-full md:aspect-square object-cover rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                                    />
                                </div>
                            </div>
                        )}
                        
                        {/* Content Section */}
                        <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.company}</h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">{exp.role}</p>
                                </div>
                                <span className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-700 rounded-full whitespace-nowrap self-start sm:self-auto">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                                        <span className="leading-relaxed">{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] my-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Showcasing my work in Fullstack Development & AI.
                </p>
            </div>
            <a href="https://github.com/ayushhh715" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:underline mt-4 md:mt-0">
                View GitHub <ExternalLink size={16}/>
            </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col group h-full"
                >
                    <div className="h-56 relative overflow-hidden bg-slate-200 dark:bg-slate-700">
                        {/* Video Background (Autoplays, loops) */}
                        {project.video ? (
                            <video 
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                                <Code2 className="text-slate-400 w-16 h-16 opacity-50" />
                            </div>
                        )}
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                             <a 
                                href={project.links.github} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform hover:bg-primary-50"
                                title="View Code"
                             >
                                <Github size={20} />
                             </a>
                             <a 
                                href={project.links.live} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform hover:bg-primary-50"
                                title="View Live Site"
                             >
                                <ExternalLink size={20} />
                             </a>
                        </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                            {project.description}
                        </p>
                        <div className="mb-6 space-y-2">
                             {project.highlights.map((h, i) => (
                                 <div key={i} className="flex items-start text-xs text-slate-500 dark:text-slate-400">
                                     <span className="mr-2 mt-1 text-primary-500">▹</span>
                                     {h}
                                 </div>
                             ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map(tech => (
                                <span key={tech} className="px-2 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </Section>

      {/* Achievements & Leadership */}
      <Section id="achievements">
         <div className="flex flex-col gap-16">
             {/* Achievements Bento Grid */}
             <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                    <Award className="w-8 h-8 text-yellow-500" /> 
                    Key Achievements
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {ACHIEVEMENTS.map((ach, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                {getAchievementIcon(ach.icon)}
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{ach.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{ach.description}</p>
                        </motion.div>
                    ))}
                </div>
             </div>

             {/* Leadership Section */}
             <div>
                 <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                     <Briefcase className="w-8 h-8 text-primary-500" /> 
                     Leadership & Impact
                 </h2>
                 <div className="grid gap-6">
                     {LEADERSHIP.map((item, idx) => (
                         <div key={idx} className="bg-gradient-to-r from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                             
                             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                 <div>
                                     <h4 className="font-bold text-2xl text-slate-900 dark:text-white flex items-center gap-2">
                                         {item.role}
                                         <Zap className="w-5 h-5 text-yellow-500 fill-current" />
                                     </h4>
                                     <div className="text-primary-600 dark:text-primary-400 font-medium text-lg mt-1">{item.org}</div>
                                 </div>
                                 <div className="px-4 py-2 bg-white dark:bg-slate-950 rounded-lg text-sm font-semibold shadow-sm border border-slate-100 dark:border-slate-800">
                                     {item.period}
                                 </div>
                             </div>
                             <p className="relative z-10 text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                                 {item.description}
                             </p>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900 mt-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Let's Connect</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
                  Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                      <div className="p-4 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full group-hover:scale-110 transition-transform">
                          <Mail size={24} />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{PERSONAL_INFO.email}</span>
                  </a>
                  <a href={SOCIAL_LINKS[1].url} target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                      <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full group-hover:scale-110 transition-transform">
                          <Linkedin size={24} />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">LinkedIn</span>
                  </a>
                  <a href={SOCIAL_LINKS[0].url} target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-4 group">
                      <div className="p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full group-hover:scale-110 transition-transform">
                          <Github size={24} />
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">GitHub</span>
                  </a>
              </div>

              <div className="text-slate-500 dark:text-slate-500 text-sm">
                  <p>© {new Date().getFullYear()} Ayush Arora. Built with React & Tailwind CSS.</p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default App;