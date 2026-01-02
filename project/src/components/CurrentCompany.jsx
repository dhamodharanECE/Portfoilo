import { motion } from 'framer-motion';
import { Building2, Calendar, FileText, Code, ExternalLink } from 'lucide-react';


const CurrentCompany = () => {
  const companyData = {
    logo: 'data:image/jpeg;base64,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',
    name: 'Ogive Technologies Private Limited',
    role: 'Software Engineer(Frontend Developer)',
    joiningDate: '2025-12-23',
    internshipLetter: 'https://example.com/internship-letter.pdf',
    currentProject: {
      name: 'IEWR Arena Manager Software ',
      description: 'The IEWR Arena Manager Software is a cutting-edge electronic warfare system engineered to disrupt and neutralize enemy communications while safeguarding friendly signals. Mounted on aircraft, it possesses the ability to detect, Analyse and a wide array of communication signals in real-time, offering a significant strategic advantage in modern warfare. The software component is integral to the system, enabling precise signal processing efficient control operations, and seamless user interface management',
      logo: 'https://www.shutterstock.com/image-illustration/futuristic-hud-elements-on-computer-260nw-1822199624.jpg',
      contributions: [
        'Led development of real-time dashboard using React and WebSockets',
        'Implemented microservices architecture with Node.js and Express',
        'Designed and optimized MongoDB database schemas',
        'Integrated third-party APIs for payment processing',
        'Implemented CI/CD pipeline using GitHub Actions',
        'Conducted code reviews and mentored junior developers'
      ]
    }
  };

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Web Development Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Code Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(#2ecc71_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Ogive <span className="text-cyan-400">Technologies</span>
        </h1>

        {/* Company Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
              <img 
                src={companyData.logo} 
                alt="Company Logo" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{companyData.name}</h2>
              <div className="flex items-center gap-4 text-gray-300 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <Code className="w-5 h-5" />
                  <span className="text-xl">{companyData.role}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                  <Calendar className="w-5 h-5" />
                  <span>Joined: {companyData.joiningDate}</span>
                </div>
              </div>
              <a
                href={companyData.internshipLetter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <FileText className="w-5 h-5" />
                View Internship Letter
              </a>
            </div>
          </div>
        </div>

        {/* Current Project */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Building2 className="w-6 h-6" />
            Current Project
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-cyan-400 mb-2">{companyData.currentProject.name}</h4>
                <p className="text-gray-300">{companyData.currentProject.description}</p>
              </div>
              
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-white">My Contributions</h5>
                <ul className="space-y-3">
                  {companyData.currentProject.contributions.map((contribution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300 group"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span className="group-hover:text-white transition-colors">{contribution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs h-48 rounded-2xl overflow-hidden border-4 border-cyan-400/30 mb-6 hover:border-cyan-400 transition-all duration-300">
                <img 
                  src={companyData.currentProject.logo} 
                  alt="Project Logo" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <br />
    </div>
  );
};

export default CurrentCompany;