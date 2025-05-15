import haircutImg from '../assets/haircut.jpg';
import beardImg from '../assets/beard.jpg';
import facialImg from '../assets/facial.jpg';

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Our Signature Services
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Haircut Card */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={haircutImg} alt="Haircut" className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold mb-3">Haircuts</h4>
              <p className="text-gray-600 mb-4">
                Precision cuts, fades, trims, and classic styles. Tailored to suit your personality.
              </p>
              <p className="font-semibold text-gray-800">Starting from ₹250</p>
            </div>
          </div>

          {/* Beard Styling Card */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={beardImg} alt="Beard Styling" className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold mb-3">Beard Styling</h4>
              <p className="text-gray-600 mb-4">
                Sculpted beards, sharp edges, clean trims – defining your masculine look.
              </p>
              <p className="font-semibold text-gray-800">Starting from ₹150</p>
            </div>
          </div>

          {/* Premium Services Card */}
          <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={facialImg} alt="Premium Services" className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold mb-3">Premium Services</h4>
              <p className="text-gray-600 mb-4">
                Facials, hair coloring, head massage & more – indulge in premium grooming.
              </p>
              <p className="font-semibold text-gray-800">Starting from ₹500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
