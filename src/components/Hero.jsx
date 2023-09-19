import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-300 ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around max-w-8xl">
        <img src="/code.jpg" alt="code wallpaper" className="lg:w-1/2" />
        <div>
          <h1 className="text-4xl lg:text-6xl font-black">Robiul&apos;s Blog!</h1>
          <p className="w-full  text-xl font-light py-6">
            Welcome to our platform! This is a website created to share blogs between programmers.
          </p>
          <p className=" text-xl font-light pb-6">
            Everyone can post their blog here. You can also comment on other&apos;s blog.
          </p>
          <blockquote className="italic font-light pb-6">
            &apos;&apos; Empowering Minds, Inspiring Curiosity, and Enriching
            Lives – Explore the World of Knowledge with me! &apos;&apos;
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
