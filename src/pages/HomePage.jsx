import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import AboutMe from "../components/AboutMe";
import RecentBlogs from "../components/RecentBlogs";
import FeaturedBlogs from "../components/FeaturedBlogs";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <RecentBlogs />
      <FeaturedBlogs />
      <AboutMe />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default HomePage;
