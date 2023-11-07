import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Registration = () => {
  const { Register, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const profile = form.get("profile");
    const email = form.get("email");
    const password = form.get("password");

    // console.log(email, password, name, profile);
    // password validation
    const re = /(?=.*[A-Z])(?=.*[\W_]).{6,}/g;
    const valid = re.test(password);
    // console.log(valid);
    if (!valid) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Password!",
        footer:
          "Make sure the password is atleast 6 character long, have atleast one capital letter, one numeric letter and one special character",
      });
    }

    Register(email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profile,
      })
        .then(() =>
          Swal.fire({
            title: "Success!",
            text: "You have successfully registered! Please Login!",
            icon: "success",
          })
        )
        .catch(() =>
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          })
        );
      // .then((res) => success("Signed Up successfully! Please Login."));
      logOut();
      navigate("/login");
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content bg-gray-800 rounded-xl flex-col border-2 border-slate-700 p-16">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-neutral-700">
          <form className="card-body" onSubmit={handleRegistration}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text text-xl font-semibold">
                  Your Name
                </span>
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
              <button className="btn text-white text-xl">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
