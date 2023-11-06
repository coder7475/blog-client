import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import AboutMe from '../components/AboutMe';

const HomePage = () => {
  return (
    <header>
      <Navbar/>
      <Hero />
      <AboutMe />
      <Newsletter />
      <Footer />
    </header>
  );
};

export default HomePage;
