import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const SignUp = () => {
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
  return (
    <div className="card-body w-96 mx-auto mt-32 shadow">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">
        Sign Up !
      </h2>
      <form className="fieldset">
        <label className="label">Name</label>
        <input type="text" name="name" className="input" placeholder="name" />

        <label className="label">Photo URL</label>
        <input
          type="text"
          name="photo"
          className="input"
          placeholder="Photo Url"
        />
        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <label className="label">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input w-full pr-10"
            placeholder="Password"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <p></p>
        <button className="btn btn-neutral mt-4">Sign Up</button>
        <p>
          have an account ?{" "}
          <Link to="/login" className="text-red-500">
            Log In
          </Link>
        </p>
        <button className="btn">Sign up with google</button>
      </form>
    </div>
  );
};

export default SignUp;
