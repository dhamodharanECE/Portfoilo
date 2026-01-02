import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ResumeIcon from './Images/resume.jpg'; 
import InternshipIcon from './Images/crio.png';
import GithubIcon from './Images/github.webp';
import LinkedInIcon from './Images/LinkedIn.png'; 
import LeetCodeIcon from './Images/leetcode.png';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const webDevBackgrounds = [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % webDevBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    {
      name: 'Resume Link',
      url: 'https://docs.google.com/document/d/11PgKf8-ZYzllQKeIkl2jPBnVcupzsAN6uwEap_9wM6Y/edit?usp=sharing',
      image: ResumeIcon,
      color: 'hover:bg-red-600 hover:text-white',
      bg: 'bg-red-900/80',
    },
    {
      name: 'Internship Link',
      url: 'https://www.crio.do/learn/portfolio/dhamodharansece23',
      image: InternshipIcon,
      color: 'hover:bg-purple-600 hover:text-white',
      bg: 'bg-purple-900/80',
    },
    {
      name: 'GitHub Link',
      url: 'https://github.com/dhamodharanECE',
      image: GithubIcon,
      color: 'hover:bg-gray-800 hover:text-white',
      bg: 'bg-gray-900/80',
    },
    {
      name: 'LinkedIn Link',
      url: 'https://www.linkedin.com/in/dhamodharan-s-web-designer',
      image: LinkedInIcon,
      color: 'hover:bg-blue-600 hover:text-white',
      bg: 'bg-blue-900/80',
    },
    {
      name: 'LeetCode Link',
      url: 'https://leetcode.com/u/dhamodharan_206',
      image: LeetCodeIcon,
      color: 'hover:bg-green-600 hover:text-white',
      bg: 'bg-green-900/80',
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-10">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {webDevBackgrounds.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
        {/* Animated Code Overlay */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-sm animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {`<Code>${Math.random().toString(36).substring(2, 7)}</Code>`}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 py-16 w-full max-w-6xl mx-auto"
      >
        <div className="mb-10">
          <h1
            className="
              text-5xl md:text-6xl font-extrabold text-white mb-4
              relative
              drop-shadow-[0_5px_15px_rgba(0,255,255,0.6)]
              hover:scale-105
              transition-all duration-300
            "
          >
            S.DHAMODHARAN,
            <span
              className="
                text-cyan-400
                ml-2
                drop-shadow-[0_0_20px_rgba(0,255,255,0.9)]
              "
            >
              B.E
            </span>
          </h1>

          <p
            className="
              text-2xl md:text-3xl font-semibold
              text-gray-300
              tracking-wide
              transform
              hover:-translate-y-1
              hover:scale-105
              transition-all duration-300
              drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]
            "
          >
            Full Stack Developer
          </p>
          <br />
          <div className="flex flex-col sm:flex-row  items-center justify-center gap-4 text-lg text-gray-300 mb-12">
            <span className="hidden sm:block text-cyan-400">•</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
             Ogive Technology (Software Engienner)
            </span>
            <span className="hidden sm:block text-cyan-400">•</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-orange">
              +2 Months
            </span>
            <span className="hidden sm:block text-cyan-400">•</span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            Frontend Development, Documentation, Testing
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`${link.bg} ${link.color} backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/20`}
            >
              <div className="w-15 h-20 rounded-full overflow-hidden border-2 border-white/30 p-1 transform group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={link.image} 
                  alt={link.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-semibold">{link.name}</span>
              <div className="w-0 group-hover:w-12 h-1 bg-current rounded-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl text-gray-300 mb-6">My Tech Stack Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React','Java Script','Next.js', 'TypeScript', 'Node.js','Express', 'MongoDB', 'SQL'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:bg-white/20 transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 font-mono text-sm"
            initial={{ y: '100vh', x: Math.random() * 100 }}
            animate={{ 
              y: '-100vh',
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {`<div className="${['container', 'wrapper', 'card', 'grid', 'flex'][i % 5]}"></div>`}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;