import React from "react";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="absolute h-[400px]  w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/32935458-d049-44c2-b94b-32f16d60ded1/IN-en-20230227-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 h-[550px] w-full bg-black/60"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
    </>
  );
};

export default Account;
