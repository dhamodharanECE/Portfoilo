import { motion } from 'framer-motion';
import { Github, ExternalLink, Building2, Code } from 'lucide-react';

const PlacementProjects = () => {
  const projects = [
    {
      company: 'Edwid Tech Pvt.Ltd',
      projectName: 'Admin Dashboard',
      description: 'Dashboard for monitoring and managing cloud infrastructure migration with real-time analytics and automated resource allocation.',
      githubLink: 'https://github.com/dhamodharanECE/Admin-Dashboard.git',
      liveLink: 'https://admin-dashboard-beige-beta-50.vercel.app',
      technologies: ['React', 'Tailwind CSS', 'Java Script', 'React-Router-Dom','git','GitHub','React Hooks']
    },
    {
      company: 'IndianAppGuy Tech PVT LTD',
      projectName: 'AI Fitness Coach',
      description: 'An AI-powered web application that generates fully personalized workout routines and diet plans based on user goals, body type, and dietary preferences. Powered by Google Gemini AI for intelligence and Pollinations.ai for visual generation.',
      githubLink: 'https://github.com/dhamodharanECE/AI-Fitness-Coach-App.git',
      liveLink: 'https://github.com/dhamodharanECE/AI-Fitness-Coach-App.git',
      technologies: ['Gemini-3.5-Flash', 'text-generation-model', 'Image-generation-model', 'Voice-generation-model', 'PDF-generation-model']
    },
    {
      company: 'MODEX DIGITAL LAB',
      projectName: 'Task Manager App',
      description: 'Real-time social media analytics dashboard with sentiment analysis and trend prediction algorithms.',
      githubLink: 'https://github.com/dhamodharanECE/Task_Management_Table.git',
      liveLink: 'https://task-management-table-two.vercel.app/',
      technologies: ['React', 'Next.js', 'Expess', 'Mongo DB','React Components','React Hooks','React-Router-Dom']
    },
    {
      company: 'Crio.Do',
      projectName: 'Medical Center Finder and Appointment Booking App',
      description: 'The Medical Center Finder and Appointment Booking App is a React-based web application that enables users to search for medical centers across the USA by selecting a state and city, view the available hospital listings, and book appointments easily',
      githubLink: 'https://github.com/dhamodharanECE/Implement-Medify-Application.git',
      liveLink: 'https://implement-medify-application.vercel.app/',
      technologies: ['React','React Components','React Hooks','React-Router-Dom']
    },
    {
      company: 'Educase India',
      projectName: 'Dashboard  Assignment',
      description: 'This project is a User Authentication and Dashboard Web Application built using HTML, CSS, and JavaScript.',
      githubLink: 'https://github.com/dhamodharanECE/Educase-India.git',
      liveLink: 'https://educase-india-indol.vercel.app',
      technologies: ['React','React Components','React Hooks','React-Router-Dom']
    },
    {
      company: 'Crio.DO',
      projectName: 'Expense Tracker',
      description: 'Modern expense tracker logos typically combine financial symbols like currency, graphs, or wallets with modern, minimalist design elements.',
      githubLink: 'https://github.com/dhamodharanECE/Expense-Tracker.git',
      liveLink: 'https://expense-tracker-e95o.vercel.app',
      technologies: ['React','Material-UI','Mode-Screen','React-Icons','React-graphs','React Components','React Hooks','React-Router-Dom']
    },
    {
      company: 'eReleGo Technologies',
      projectName: 'Ticket-Booking-System',
      description: 'Design and implement a basic ticket booking system that simulates the core functionality of platforms like RedBus or BookMyShow or Doctor Appointment booking. The system must handle high concurrency scenarios to prevent race conditions and overbooking.',
      githubLink: 'https://github.com/dhamodharanECE/Ticket-Booking-System.git',
      liveLink: 'https://ticket-booking-system-nine.vercel.app/register',
      technologies: ['React.js', 'Java Script', 'Tailwind CSS', 'React-Components','React-hooks','Debugging tools']
    }
  ];

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Web Development Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Company <span className="text-cyan-400">Projects</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span className="text-lg font-semibold text-white">{project.company}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.projectName}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-xs hover:bg-cyan-800/50 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </motion.a>
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <br />
    </div>
  );
};

export default PlacementProjects;