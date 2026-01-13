import { motion } from 'framer-motion';
import { Layout, Palette, Zap, CheckCircle, Sparkles } from 'lucide-react';

const FrontendSkills = () => {
  const skills = [
    {
      name: 'HTML5',
      level: 100,
      icon: '🔧',
      color: 'from-orange-500 to-red-500',
      description: 'Semantic markup, SEO optimization, Accessibility'
    },
    {
      name: 'CSS3',
      level: 90,
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced animations, Flexbox, Grid, Custom properties'
    },
    {
      name: 'Tailwind CSS',
      level: 92,
      icon: '💨',
      color: 'from-teal-500 to-emerald-500',
      description: 'Utility-first, Responsive design, Custom configurations'
    },
    {
      name: 'JavaScript',
      level: 95,
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
      description: 'ES6+, Async programming, DOM manipulation'
    },
    {
      name: 'React',
      level: 95,
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      description: 'Hooks, Context API, React Router, State management'
    },
    {
      name: 'Next.js',
      level: 80,
      icon: '🚀',
      color: 'from-gray-700 to-gray-900',
      description: 'SSR, Static generation, API routes, Image optimization'
    }
  ];

  const features = [
    'Responsive Web Design',
    'Cross-browser Compatibility',
    'Performance Optimization',
    'Progressive Web Apps',
    'Component Architecture',
    'State Management'
  ];

  return (
    <div className="relative min-h-screen pt-20 px-4 overflow-hidden">
      {/* Web Development Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Floating Code Snippets */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-sm text-cyan-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${15 + Math.random() * 15}s infinite linear`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              {i % 3 === 0 ? 'const' : i % 3 === 1 ? 'function' : 'return'}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Layout className="w-10 h-10 text-cyan-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Frontend <span className="text-cyan-400">Skills</span>
            </h1>
            <Palette className="w-10 h-10 text-cyan-400" />
          </div>
          <p className="text-orange-300 max-w-2xl mx-auto">
            Modern frontend technologies and frameworks for building responsive, 
            interactive, and high-performance web applications
          </p>
        </div>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="relative">
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div className="mb-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300`}
                  />
                </div>
              </div>

              <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{skill.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">Proficiency</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Zap
                      key={i}
                      className={`w-4 h-4 transition-all duration-300 ${
                        i < Math.floor(skill.level / 20)
                          ? 'text-yellow-400 fill-yellow-400 group-hover:scale-125'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Layout className="w-6 h-6" />
            Frontend Development Features
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 p-4 bg-black/30 rounded-xl hover:bg-black/40 transition-colors group cursor-pointer"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Projects Showcase */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <h4 className="text-xl font-bold text-white mb-4">Featured Projects</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-6 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h5 className="text-lg font-semibold text-white mb-2">E-commerce Dashboard</h5>
                <p className="text-gray-300 text-sm mb-3">Built with React, Tailwind CSS, Node.js, Express and Mongo DB</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Context API', 'Responsive'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-900/50 text-cyan-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <h5 className="text-lg font-semibold text-white mb-2">Portfolio Website</h5>
                <p className="text-gray-300 text-sm mb-3">Modern portfolio with animations and dark mode</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Framer Motion', 'Tailwind'].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-900/50 text-purple-400 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <br />
    </div>
  );
};

export default FrontendSkills;