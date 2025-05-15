import { HiPhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-white text-black dark:text-black py-16 px-6 font-poppins"
    >
      <div className="max-w-3xl mx-auto bg-black text-white rounded-xl shadow-lg p-10 space-y-10">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-bold mb-2">Contact Information</h2>
          <p className="text-lg text-gray-300">
            We’re here to help! Reach out or visit us today.
          </p>
        </div>

        {/* Address */}
        <div className="space-y-2 text-base">
          <h4 className="text-lg font-semibold text-yellow-400">Address</h4>
          <p className="text-gray-300">
            📍 500 N Bell Ave #109,<br />
            Denton, TX 76209, United States
          </p>
        </div>

        {/* Phone */}
        <div className="space-y-2 text-base">
          <h4 className="text-lg font-semibold text-yellow-400">Phone</h4>
          <a
            href="tel:+19406129127"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition"
          >
            <HiPhone size={20} /> +1 940-612-9127
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-start gap-4 pt-6">
          <a
            href="https://maps.google.com/?q=500+N+Bell+Ave"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition"
          >
            📍 Get Directions
          </a>
          <a
            href="https://wa.me/19406129127"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition inline-flex items-center gap-2"
          >
            <FaWhatsapp size={20} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
