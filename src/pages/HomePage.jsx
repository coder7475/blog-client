import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import AboutMe from "../components/AboutMe";
import RecentBlogs from "../components/RecentBlogs";
import FeaturedBlogs from "../components/FeaturedBlogs";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        
      >
      <Hero />
      </motion.div>
      <RecentBlogs />
      <FeaturedBlogs />
      <AboutMe />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default HomePage;
