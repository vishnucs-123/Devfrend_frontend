import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <section id="about" className="bg-white py-16 font-poppins">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <img
              src={aboutImage}
              alt="Barber working"
              className="rounded-xl shadow-xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left text-gray-800">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Your Grooming,
            </span>{' '}
            <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">
              Our Passion
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            At <span className="font-semibold text-black">Fama Barber Shop</span>, we blend timeless techniques with today’s trends. Whether you need a sharp fade or a fresh beard lineup, our stylists ensure you walk out confident and clean.
          </p>

          <ul className="list-disc pl-5 md:pl-0 md:ml-5 space-y-2 text-gray-600 font-medium text-left">
            <li>💈 Skilled barbers with modern techniques</li>
            <li>🧼 Sanitized tools & clean environment</li>
            <li>✂️ Trendy cuts with classic finishes</li>
            <li>🤝 Personalized & professional service</li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4">
            <a
              href="#services"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
