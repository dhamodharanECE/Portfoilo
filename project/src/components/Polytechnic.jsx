import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Target, Cpu } from 'lucide-react';

const Polytechnic = () => {
  const polytechnicData = {
    logo: 'data:image/jpeg;base64,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',
    name: 'K.S.R. Polytechnic College (KSRPC)',
    degree: 'Diploma in Electronics and Communication Engineering',
    stream: 'Depaertment Of Electronics and Communication Engineering',
    course: 'Diploma in Electronics and Communication Engineering',
    duration: '2018 - 2020',
    location: 'Tiruchengode, Namakkal, Tamil Nadu',
    description: 'Faculty expertise spans Signal Processing, Wireless Communication, VLSI Design, and Embedded Systems.',
    skills: [
      'Embedded Systems',
      'Digital Electronics',
      'Computer Networks',
      'C Programming',
      'Microprocessors',
      'Circuit Design',
      'Project Management',
      'Integrated Circuits',
      'IOT Circuit Design',
      'VLSI Circuit Design ',
      'Electronics Design',
      'Simulation Tools',
      'Communication & Presentation'
    ],
    projects: [
      'Diode Working Project',
      'Digital Signal Processor',
      'Network Design for 5G',
      'Circuit Control System'
    ]
  };

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Web Development Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 L100,50 M50,0 L50,100" stroke="rgba(52, 211, 153, 0.3)" strokeWidth="1" fill="none"/>
                <circle cx="50" cy="50" r="5" fill="rgba(52, 211, 153, 0.5)"/>
                <circle cx="0" cy="50" r="3" fill="rgba(52, 211, 153, 0.5)"/>
                <circle cx="100" cy="50" r="3" fill="rgba(52, 211, 153, 0.5)"/>
                <circle cx="50" cy="0" r="3" fill="rgba(52, 211, 153, 0.5)"/>
                <circle cx="50" cy="100" r="3" fill="rgba(52, 211, 153, 0.5)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Polytechnic <span className="text-emerald-400">Education</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 border  border-white/20 hover:border-emerald-400/50 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-2">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-emerald-400/30 hover:border-emerald-400 transition-all duration-300">
              <img 
                src={polytechnicData.logo} 
                alt="Polytechnic Logo" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">{polytechnicData.name}</h2>
              <p className="text-xl text-emerald-400 mb-4">{polytechnicData.course}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-white/10 rounded-full">
                  <GraduationCap className="w-5 h-5" />
                  <span>{polytechnicData.degree}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-white/10 rounded-full">
                  <Calendar className="w-5 h-5" />
                  <span>{polytechnicData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-white/10 rounded-full">
                  <MapPin className="w-5 h-5" />
                  <span>{polytechnicData.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Course Description */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              Course Description
            </h3>
            <p className="text-orange-300 leading-relaxed">{polytechnicData.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {polytechnicData.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-emerald-900/30 text-emerald-400 rounded-full border border-emerald-400/20 hover:bg-emerald-800/40 hover:border-emerald-400/50 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Projects</h3>
              <ul className="space-y-3">
                {polytechnicData.projects.map((project, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-orange-300 group"
                  >
                    <Cpu className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="group-hover:text-white transition-colors">{project}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <br />
    </div>
  );
};

export default Polytechnic;