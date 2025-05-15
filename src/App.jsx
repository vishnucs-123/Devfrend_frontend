import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CallNowPopup from './components/CallNowPopup';

function App() {
  return (
    <div className="bg-white text-gray-900 scroll-smooth">
      <Header />

      {/* Add padding top to avoid overlap with sticky header */}
      <section id="about" className="pt-[100px] min-h-screen">
        <About />
      </section>

      <section id="services" className="pt-[100px] min-h-screen">
        <Services />
      </section>

      <section id="services" className="pt-[100px] min-h-screen">
        <ContactSection />
      </section>

      <footer className="bg-black text-white py-10 px-6 font-poppins">
        <Footer />
      </footer>

      <CallNowPopup />
    </div>
  );
}

export default App;
