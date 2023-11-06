
const AboutMe = () => {
  return (
    <div id="about" className="relative bg-slate-800 text-white overflow-hidden mt-16 max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
                About me
              </h2>

              <p className="lg:w-2/3 my-6 font-light">
              Alexander Islam, the visionary owner of &apos;&apos;Programmers Blog&apos;&apos; a digital haven for tech enthusiasts, coding aficionados, and software developers. With a background deeply rooted in programming and software development, Scott&apos;s passion for technology knows no bounds.
              </p>
              <p className="lg:w-2/3 font-light">
              As the owner and curator of &apos;&apos;Programmers Blog,&apos;&apos; Scott has carved out a unique space where the magic of code comes to life. His journey as a programmer and software developer is the foundation upon which this blog stands. With years of experience, a wealth of knowledge, and an unquenchable thirst for innovation, Scott has created a platform that serves as a wellspring of information, inspiration, and collaboration.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-64 w-full object-cover object-top md:h-[500px] lg:w-full lg:h-full brightness-75"
          src="/manx.jpg"
          alt="owner image"
        />
      </div>
    </div>
  );
};

export default AboutMe;
