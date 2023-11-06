import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content bg-gray-800 rounded-xl flex-col border-2 border-slate-700 p-16">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-neutral-700">
          <form className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text text-xl font-semibold">Your Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="form-control" htmlFor="profile">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Profile URL
                </span>
              </label>
              <input
                id="profile"
                name="profile"
                type="text"
                placeholder="Profile Picture URL"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-xl font-semibold">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-xl font-semibold">
                  Password
                </span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="text-xl font-medium mt-6">
              <p>
                Already Have an Account? Please{" "}
                <Link to={`/login`} className="text-blue-500 text-xl font-bold">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white text-xl">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
