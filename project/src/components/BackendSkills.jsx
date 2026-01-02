import { motion } from 'framer-motion';
import { Server, Database, Zap, Cpu, Cloud, Code2, Network } from 'lucide-react';

const BackendSkills = () => {
  const backendSkills = [
    {
      category: 'Backend Framework',
      skills: [
        { name: 'Node.js', level: 90, icon: '🟢', color: 'from-green-500 to-emerald-600' },
        { name: 'Express.js', level: 88, icon: '🚂', color: 'from-gray-500 to-gray-700' },
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 95, icon: '🍃', color: 'from-green-600 to-emerald-700' },
        { name: 'MySQL', level: 80, icon: '🐬', color: 'from-blue-500 to-cyan-600' },
      ]
    },
    {
      category: 'API & Tools',
      skills: [
        { name: 'REST API', level: 92, icon: '🔗', color: 'from-blue-600 to-indigo-700' },
        { name: 'Fetch API', level: 95, icon: '📊', color: 'from-pink-500 to-rose-600' },
      ]
    },
    {
      category: 'Authentication',
      skills: [
        { name: 'JWT', level: 88, icon: '🔐', color: 'from-yellow-500 to-orange-600' },
        { name: 'OAuth 2.0', level: 80, icon: '🔑', color: 'from-red-500 to-pink-600' },
      ]
    },
    {
      category: 'Cloud Services',
      skills: [
        { name: 'Supabase', level: 78, icon: '⚡', color: 'from-emerald-500 to-green-600' },
        { name: 'Firebase', level: 76, icon: '🔥', color: 'from-orange-500 to-yellow-600' },
      ]
    },
    {
      category: 'API Clients',
      skills: [
        { name: 'Axios', level: 90, icon: '📡', color: 'from-purple-500 to-indigo-600' },
        { name: 'JSon', level: 85, icon: '🌐', color: 'from-cyan-500 to-blue-600' },
        { name: 'Postman', level: 95, icon: '📬', color: 'from-orange-600 to-red-600' },
      ]
    }
  ];

  const projects = [
    {
      name: 'E-commerce Backend',
      description: 'RESTful API with authentication, payment integration, and order management',
      stack: ['Node.js', 'Express', 'MongoDB', 'Stripe API'],
      github: '#'
    },
    {
      name: 'Real-time Chat App',
      description: 'WebSocket-based chat application with rooms and file sharing',
      stack: ['Socket.io', 'JWT', 'Redis', 'MongoDB'],
      github: '#'
    },
    {
      name: 'Microservices Architecture',
      description: 'Containerized microservices with Docker and Kubernetes orchestration',
      stack: ['Docker', 'Kubernetes', 'Node.js', 'Nginx'],
      github: '#'
    }
  ];

  return (
    <div className="relative min-h-screen pt-20 px-4">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full relative">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="50" cy="20" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="80" cy="20" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="20" cy="50" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="50" cy="50" r="5" fill="#10b981" opacity="0.7"/>
                  <circle cx="80" cy="50" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="20" cy="80" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="50" cy="80" r="3" fill="#10b981" opacity="0.5"/>
                  <circle cx="80" cy="80" r="3" fill="#10b981" opacity="0.5"/>
                  <path d="M20,20 L50,50 L80,20 M20,50 L50,20 L80,50 M20,80 L50,50 L80,80" 
                        stroke="#10b981" strokeWidth="0.5" fill="none" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network)"/>
            </svg>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Server className="w-10 h-10 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Backend <span className="text-emerald-400">Skills</span>
            </h1>
            <Database className="w-10 h-10 text-emerald-400" />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Server-side development, database management, and API integration expertise
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {backendSkills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 group-hover:text-emerald-400 transition-colors">
                {category.category === 'Backend Framework' && <Server className="w-5 h-5" />}
                {category.category === 'Database' && <Database className="w-5 h-5" />}
                {category.category === 'API & Tools' && <Code2 className="w-5 h-5" />}
                {category.category === 'Authentication' && <Zap className="w-5 h-5" />}
                {category.category === 'Cloud Services' && <Cloud className="w-5 h-5" />}
                {category.category === 'API Clients' && <Cpu className="w-5 h-5" />}
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2 group/skill">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-emerald-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full group-hover/skill:shadow-lg group-hover/skill:shadow-emerald-500/30 transition-all duration-300`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Network className="w-6 h-6" />
            Backend Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-emerald-900/20 to-gray-900/50 p-6 rounded-2xl border border-emerald-400/20 hover:border-emerald-400/40 transition-all"
              >
                <h4 className="text-lg font-bold text-white mb-2">{project.name}</h4>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full text-xs hover:bg-emerald-800/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  View Code
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* API Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-emerald-400/50 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Cloud className="w-6 h-6" />
            API Integration Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Payment Gateways', desc: 'Stripe, PayPal, Razorpay' },
              { name: 'Social Auth', desc: 'Google, Facebook, GitHub OAuth' },
              { name: 'Email Services', desc: 'SendGrid, Nodemailer, AWS SES' },
              { name: 'File Storage', desc: 'AWS S3, Cloudinary, Firebase' },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-black/30 p-4 rounded-xl border border-gray-700 hover:border-emerald-400/30 transition-colors group"
              >
                <h4 className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <br />
    </div>
  );
};

export default BackendSkills;