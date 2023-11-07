import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import AboutMe from '../components/AboutMe';
import RecentBlogs from '../components/RecentBlogs';

const HomePage = () => {
  return (
    <header>
      <Navbar/>
      <Hero />
      <RecentBlogs />
      <AboutMe />
      <Newsletter />
      <Footer />
    </header>
  );
};

export default HomePage;
