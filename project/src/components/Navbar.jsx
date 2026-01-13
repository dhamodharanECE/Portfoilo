import { Link } from 'react-router-dom';
import { Menu, X, Home, Briefcase, GraduationCap, Code, Database } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Company', path: '/current-company', icon: <Briefcase size={20} /> },
    { name: 'Projects', path: '/placement-projects', icon: <Code size={20} /> },
    { name: 'Internships', path: '/internships', icon: <GraduationCap size={20} /> },
    { name: 'College', path: '/college', icon: <GraduationCap size={20} /> },
    { name: 'Polytechnic', path: '/polytechnic', icon: <GraduationCap size={20} /> },
    { name: 'Education', path: '/education', icon: <GraduationCap size={20} /> },
    { name: 'Frontend_Skils', path: '/frontend-skills', icon: <Code size={20} /> },
    { name: 'Backend_Skils', path: '/backend-skills', icon: <Database size={20} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-9xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-start">
            <Link to="/" className="text-white text-xl font-bold">
              DHAMO<span className="text-cyan-400">DHARAN</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-2 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 px-3 py-2 rounded-lg transition-all duration-300"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;