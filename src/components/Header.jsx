import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo2.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const sections = ['about', 'services', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = 'about';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop - 80 <= scrollY) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-black text-white p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Fama Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-xl font-bold">Fama Barber Shop</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`hover:text-yellow-400 transition-colors ${
                    activeSection === id ? 'text-yellow-400 font-semibold' : ''
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-black px-6 py-4">
          <ul className="flex flex-col space-y-4 text-lg">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`hover:text-yellow-400 ${
                    activeSection === id ? 'text-yellow-400 font-semibold' : ''
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
