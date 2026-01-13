import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % webDevBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    {
      name: 'Resume',
      url: 'https://docs.google.com/document/d/11PgKf8-ZYzllQKeIkl2jPBnVcupzsAN6uwEap_9wM6Y/edit?usp=sharing',
      image: ResumeIcon,
      color: 'hover:bg-red-600 hover:text-white',
      bg: 'bg-red-900/80',
    },
    {
      name: 'Internship',
      url: 'https://www.crio.do/learn/portfolio/dhamodharansece23',
      image: InternshipIcon,
      color: 'hover:bg-purple-600 hover:text-white',
      bg: 'bg-purple-900/80',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dhamodharanECE',
      image: GithubIcon,
      color: 'hover:bg-gray-800 hover:text-white',
      bg: 'bg-gray-900/80',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhamodharan-s-web-designer',
      image: LinkedInIcon,
      color: 'hover:bg-blue-600 hover:text-white',
      bg: 'bg-blue-900/80',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/dhamodharan_206',
      image: LeetCodeIcon,
      color: 'hover:bg-green-600 hover:text-white',
      bg: 'bg-green-900/80',
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 sm:py-16">
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
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/70" />
        {/* Animated Code Overlay - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          {Array.from({ length: window.innerWidth < 768 ? 10 : 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-xs sm:text-sm animate-pulse"
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
        className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12 text-center mt-3">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
              font-extrabold text-white mb-3 sm:mb-4
              leading-tight
              drop-shadow-lg
            "
          >
          <span className="text-lg sm:text-4xl md:text-3xl lg:text-5xl font-bold text-white [text-shadow:_0_0_10px_#ff6b6b,_0_0_20px_#4ecdc4,_0_0_30px_#45b7d1]">S. DHAMODHARAN.,B.E(ECE)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl 
              font-semibold text-orange-400 mb-4 sm:mb-6
              leading-snug
              px-2">
            Full Stack Developer
          </motion.p>
          {/* Company Info - Responsive Grid */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              gap-3 sm:gap-4 
              mb-6 sm:mb-12 
              px-2">
            {/* Company */}
            <div className="
              flex flex-col items-center justify-center 
              px-4 py-3 
              bg-white/10 backdrop-blur-sm 
              rounded-xl sm:rounded-full
              border border-white/20
              hover:border-cyan-400/50
              transition-all duration-300
            ">
              <span className="text-sm sm:text-base text-gray-300 text-center">
                Ogive Technology
              </span>
              <span className="text-xs sm:text-sm text-cyan-400 mt-1">
                Software Engineer
              </span>
            </div>

            {/* Duration */}
            <div className="
              flex flex-col items-center justify-center 
              px-4 py-3 
              bg-white/10 backdrop-blur-sm 
              rounded-xl sm:rounded-full
              border border-white/20
              hover:border-orange-400/50
              transition-all duration-300">
              <span className="text-sm sm:text-base text-gray-300 text-center">
                Experience :
              </span>
              <span className="text-xs sm:text-sm text-orange-400 mt-1">
                +2 Months
              </span>
            </div>

            {/* Skills */}
            <div className="
              col-span-1 sm:col-span-2 lg:col-span-1
              flex flex-col items-center justify-center 
              px-4 py-3 
              bg-white/10 backdrop-blur-sm 
              rounded-xl sm:rounded-full
              border border-white/20
              hover:border-green-400/50
              transition-all duration-300">
              <span className="text-sm sm:text-base text-gray-300 text-center">
                Specialization :
              </span>
              <span className="text-xs sm:text-sm text-green-400 mt-1 text-center">
                Frontend Design, Documentation, Testing
              </span>
            </div>
          </motion.div>
        </div>

        {/* Links Grid - Responsive Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
            gap-4 sm:gap-6 
            mb-8 sm:mb-12
            px-2">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
              whileTap={{ scale: 0.95 }}
              className={`
                ${link.bg} ${link.color} 
                backdrop-blur-lg 
                border border-white/20 
                rounded-xl sm:rounded-2xl 
                p-4 sm:p-6 
                flex flex-col items-center justify-center 
                gap-3 sm:gap-4 
                transition-all duration-300 
                group 
                hover:shadow-xl
                min-h-[140px] sm:min-h-[180px]
              `}
            >
              {/* Icon Container */}
              <div className="
                w-12 h-12 sm:w-16 sm:h-16 
                rounded-full 
                overflow-hidden 
                border-2 border-white/30 
                p-0.5 sm:p-1
                transform 
                group-hover:scale-110 
                transition-transform duration-300
                flex items-center justify-center
              ">
                <img 
                  src={link.image} 
                  alt={link.name}
                  className="
                    w-full h-full 
                    object-cover 
                    rounded-full
                  "
                />
              </div>
              
              {/* Link Name */}
              <span className="
                text-sm sm:text-base lg:text-lg 
                font-semibold 
                text-center
                line-clamp-2
              ">
                {link.name}
              </span>
              
              {/* Hover Indicator */}
              <div className="
                w-0 group-hover:w-8 sm:group-hover:w-12 
                h-0.5 sm:h-1 
                bg-current 
                rounded-full 
                transition-all duration-300
              " />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 sm:mt-16"
        >
          <h3 className="
            text-xl sm:text-2xl 
            text-orange-400
            mb-4 sm:mb-6
            text-center
          ">
            My Tech Stack Skills
          </h3>
          
          <div className="
            flex flex-wrap 
            justify-center 
            gap-2 sm:gap-3
            px-2
          ">
            {['React', 'JavaScript', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'SQL'].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="
                  px-3 py-2 sm:px-4 sm:py-2 
                  bg-white/10 
                  backdrop-blur-sm 
                  rounded-full 
                  text-gray-300 
                  border border-white/20 
                  hover:bg-white/20 
                  hover:border-cyan-400/50 
                  hover:text-cyan-300
                  transition-all duration-300
                  text-sm sm:text-base
                  whitespace-nowrap
                "
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-8 sm:mt-12
            flex flex-col sm:flex-row
            items-center justify-center
            gap-3 sm:gap-6
            text-sm sm:text-base
            text-gray-400
          "
        >
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-400" />
            <span className='text-cyan-400'>+91 93614 99647</span>
          </div> 
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-400" />
            <span className='text-cyan-400'>dhamodharans206@gmail.com</span> 
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className='text-cyan-400'>Namakkal, Tamil Nadu</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Code Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none">
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

      {/* Scroll Indicator - Mobile Only */}
      <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400 mb-2">Scroll for more</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;