import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="relative z-10 py-[120px] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto text-center">
              <h2 className="mb-2 text-8xl font-bold text-white sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-4xl font-semibold leading-tight text-white">
                Oops! That page can&apos;t be found
              </h4>
              <p className="mb-8 text-xl text-white">
                The page you are looking for does not exist
              </p>
              <NavLink to={`/`}>
                <button className="inline-block rounded-lg border border-white px-8 py-3 text-center text-xl font-bold text-white transition hover:bg-white hover:text-primary">
                  Go To Home
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-10 flex h-full max-w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
      </div>
    </section>
  );
};

export default ErrorPage;
