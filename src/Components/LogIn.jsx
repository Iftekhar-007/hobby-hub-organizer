import React, { use, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";

const LogIn = () => {
  const { logInUserWithEmailAndPass } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.title = "Log In | HobbyHub";

    const setFavicon = (url) => {
      let link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/png";
      link.rel = "icon";
      link.href = url;
      document.head.appendChild(link);
    };

    setFavicon("../../public/login.png");
  }, []);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogInUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUserWithEmailAndPass(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "User Logged In Successfully!",
          icon: "success",
          draggable: true,
          // navigate("/");
        });
        navigate(location.state?.from?.pathname || "/");
      })
      .then((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">
              Login now!
            </h1>
            <form onSubmit={handleLogInUser} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full pr-10"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

                <button>
                  <a className="link link-hover">Forgot password?</a>
                </button>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p>
                Don't have any account yet ?{" "}
                <NavLink to="/signup" className="text-red-500">
                  Create Now!
                </NavLink>
              </p>
              <button className="btn">Sign up with google</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
