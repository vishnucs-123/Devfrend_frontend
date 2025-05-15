import logo from '../assets/logo2.png';
import { HiPhone, HiMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col items-start gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fama Barber Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold">Fama Barber Shop</span>
        </div>

        {/* Get In Touch Section below the logo */}
        <div className="text-sm text-gray-400 space-y-2">
          <p className="font-semibold text-white mb-1">Get In Touch</p>

          <div className="flex items-center gap-2">
            <FaInstagram className="text-yellow-400" />
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-2">
            <HiMail className="text-yellow-400" />
            <a
              href="mailto:info@famabarber.com"
              className="hover:text-yellow-400 transition"
            >
              info@famabarber.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <HiPhone className="text-yellow-400" />
            <a
              href="tel:+19406129127"
              className="hover:text-yellow-400 transition"
            >
              +1 940-612-9127
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        © 2025 Fama Barber Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
