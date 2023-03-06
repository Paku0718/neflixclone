import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError } = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      // navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="h-screen w-full">
      <img
        className="absolute hidden h-full w-full object-cover sm:block"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/32935458-d049-44c2-b94b-32f16d60ded1/IN-en-20230227-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="/"
      />
      <div className=" fixed top-0 left-0 h-screen w-full bg-black/60"></div>
      <div className="fixed z-50 w-full px-4 py-24">
        <div className="mx-auto h-[600px] max-w-[450px] bg-black/75 text-white">
          <div className="mx-auto max-w-[320px] py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="">{error}</p> : null}
            <form onSubmit={handleSubmit} className="flex w-full flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="my-2 bg-gray-700 p-3"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="my-2 bg-gray-700 p-3"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="my-6 rounded bg-red-600 py-3 font-bold ">
                Sign In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  <input type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>
                {""}
                <Link to="/signup"> Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
