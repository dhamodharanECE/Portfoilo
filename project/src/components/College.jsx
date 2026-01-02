import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Target, Code } from 'lucide-react';

const College = () => {
  const collegeData = {
    logo: 'data:image/png;base64,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',
    name: ' Coimbatore Institute of Technology (CIT)',
    degree: 'Department of Bachelor of Enginnering',
    stream: 'Electronics and Communication Engineering',
    course: 'B.E in Electronics and Communication Engineering (ECE)',
    duration: '2021 - 2024',
    location: 'Coimbatore, Tamil Nadu',
    description: 'Faculty expertise spans Signal Processing, Wireless Communication, VLSI Design, and Embedded Systems.',
    skills: [
      'Project Management',
      'Integrated Circuits',
      'IOT Circuit Design',
      'VLSI Circuit Design ',
      'Electronics Design',
      'Simulation Tools',
      'Aptitude & Ethics',
      'Data Structures & Algorithms',
      'Communication & Presentation'
    ],
    projects: [
      'Gas and Fire Detection Using IOT System ',
      'Emotion recognition using EEG',
      'AMC Enhanced Microstrip Patch Antenna using 5G Communication',
    ]
  };

  return (
    <div className="relative min-h-screen pt-20 px-4 overflow-hidden">
      {/* Web Development Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Binary Code Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-green-400 font-mono text-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `scroll ${20 + Math.random() * 20}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              >
                {Math.random().toString(2).substring(2, 10).padEnd(8, '0')}
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          College <span className="text-cyan-400">Education</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
              <img 
                src={collegeData.logo} 
                alt="College Logo" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">{collegeData.name}</h2>
              <p className="text-xl text-cyan-400 mb-4">{collegeData.course}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-white/10 rounded-full">
                  <GraduationCap className="w-5 h-5" />
                  <span>{collegeData.degree}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-white/10 rounded-full">
                  <Calendar className="w-5 h-5" />
                  <span>{collegeData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 px-4 py-2 bg-white/10 rounded-full">
                  <MapPin className="w-5 h-5" />
                  <span>{collegeData.location}</span>
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
            <p className="text-gray-300 leading-relaxed">{collegeData.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Target className="w-6 h-6" />
                Skills Acquired
              </h3>
              <div className="flex flex-wrap gap-3">
                {collegeData.skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-cyan-900/30 text-cyan-400 rounded-full border border-cyan-400/20 hover:bg-cyan-800/40 hover:border-cyan-400/50 transition-colors cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Academic Projects</h3>
              <ul className="space-y-3">
                {collegeData.projects.map((project, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 group"
                  >
                    <Code className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="group-hover:text-white transition-colors">{project}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stream Details */}
          <div className="mt-2 pt-8 border-t border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Stream Details</h3>
            <div className="bg-black/30 rounded-xl p-6 hover:bg-black/40 transition-all duration-300">
              <h4 className="text-xl font-semibold text-cyan-400 mb-2">{collegeData.stream}</h4>
              <p className="text-gray-300">
                Field of study: Combines electrical engineering and computer science to work on electronic devices, circuits, and communication systems like satellites, mobile networks, and the internet.

                Key topics: Includes microprocessors, VLSI design, embedded systems, and wireless communication.

                Career paths: Engineers in this field can work in areas like telecommunications, robotics, and the Internet of Things (IoT). 
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <br />
    </div>
  );
};

export default College;