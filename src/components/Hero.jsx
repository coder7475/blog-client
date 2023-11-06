import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-300 ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around max-w-8xl">
        <img src="/code.jpg" alt="code wallpaper" className="lg:w-1/2" />
        <div>
          <h1 className="text-4xl lg:text-6xl font-black">Programmers Blog!</h1>
          <p className="w-full  text-xl font-light py-6">
            Welcome to our platform! We are a team of dedicated individuals
            passionate about sharing knowledge, fostering creativity, and
            providing valuable resources to our diverse community of users.
          </p>
          <p className=" text-xl font-light pb-6">
            Our mission is to create an inclusive space where people from all
            walks of life can explore, learn, and engage with a wide array of
            topics. We believe in the power of education and information to
            empower individuals and enrich their lives.
          </p>
          <blockquote className="italic font-light pb-6">
            &apos;&apos; Empowering Minds, Inspiring Curiosity, and Enriching
            Lives – Explore the World of Knowledge with Us! &apos;&apos;
          </blockquote>
          <NavLink to={"/register"}>
            <button className="btn btn-neutral btn-outline text-xl font-bold mb-10">
              Register Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
