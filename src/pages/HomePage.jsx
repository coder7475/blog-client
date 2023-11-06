import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  return (
    <header>
      <Navbar/>
      <Hero />
      <Newsletter />
      <Footer />
    </header>
  );
};

export default HomePage;
