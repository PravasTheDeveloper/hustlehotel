import BestHotels from './BestHotels/BestHotels';
import './App.css';
import Home from './HomePageContent/Home';
import AboutUsSection from './AboutUsSection/AboutUsSection';
import ServicesSection from './ServicesSection/ServicesSection';
import ConnectWithUs from './ConnectWithUs/ConnectWithUs';
import ContactDirectly from './ContactDirectly/ContactDirectly';
import FooterPenel from './FooterPenel/FooterPenel';


function App() {
  return (
    <>
      <Home />
      <BestHotels />
      <AboutUsSection />
      <ServicesSection />
      <ConnectWithUs />
      <ContactDirectly />
      <FooterPenel />
    </>
  );
}

export default App;
