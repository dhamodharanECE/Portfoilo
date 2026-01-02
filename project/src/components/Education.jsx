import { motion } from 'framer-motion';
import { School, Award, Calendar, BookOpen, Code } from 'lucide-react';

const Education = () => {
  const educationData = {
    tenth: {
      school: 'Gandhi Mathriculation High School',
      board: 'State Board',
      percentage: '86.4%',
      duration: '2014 - 2016',
      subjects: ['Tamil', 'English', 'Maths', 'Social Science'],
      achievements: ['Good Speaker', 'Science Exhibition - First Prize', 'Perfect Attendance']
    },
    twelfth: {
      school: 'Gandhi Mathriculation High School',
      board: 'State Board',
      percentage: '72.8%',
      duration: '2016 - 2018',
      stream: 'Bio_Maths Groub',
      subjects: ['Tamil','English','Mathematics','Physics', 'Chemistry', 'Biology'],
      achievements: ['Good Speaker', 'Science Exhibition - First Prize', 'Perfect Attendance']
    }
  };

  return (
    <div className="relative min-h-screen pt-20 px-4">
      {/* Web Development Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        {/* Hexagon Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23f59e0b' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px',
          }} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          School <span className="text-cyan-400">Education</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 pb-5 mt-2">
          {/* 10th Standard */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <School className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">10th Standard</h2>
                <p className="text-green-400">Secondary School Certificate</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group">
                <BookOpen className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span className="font-semibold group-hover:text-white transition-colors">{educationData.tenth.school}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Award className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span>Board: {educationData.tenth.board}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Award className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span>Percentage: <span className="text-green-400 font-bold">{educationData.tenth.percentage}</span></span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Calendar className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span>{educationData.tenth.duration}</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {educationData.tenth.subjects.map((subject, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm hover:bg-green-800/50 transition-colors"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
              <ul className="space-y-2">
                {educationData.tenth.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300 group"
                  >
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="group-hover:text-white transition-colors">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 12th Standard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center hover:rotate-12 transition-transform duration-300">
                <School className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">12th Standard</h2>
                <p className="text-blue-400">Higher Secondary Certificate</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group">
                <BookOpen className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span className="font-semibold group-hover:text-white transition-colors">{educationData.twelfth.school}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Award className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span>Board: {educationData.twelfth.board}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Award className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span>Percentage: <span className="text-blue-400 font-bold">{educationData.twelfth.percentage}</span></span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 group">
                <Calendar className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                <span>{educationData.twelfth.duration}</span>
              </div>
              
              <div className="text-gray-300 group">
                <span className="font-semibold">Stream:</span> {educationData.twelfth.stream}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {educationData.twelfth.subjects.map((subject, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm hover:bg-blue-800/50 transition-colors"
                  >
                    {subject}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Achievements</h3>
              <ul className="space-y-2">
                {educationData.twelfth.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300 group"
                  >
                    <div className="w-1.5 h-1.5 wb-5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <span className="group-hover:text-white transition-colors">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <br />
    </div>
  );
};

export default Education;