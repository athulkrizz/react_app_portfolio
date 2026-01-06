import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStack from './components/TechStack';
import AboutServices from './components/AboutServices';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import 'primeicons/primeicons.css';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutServices />
      <TechStack />
      <WorkSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
