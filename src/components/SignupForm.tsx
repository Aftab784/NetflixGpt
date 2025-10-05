import React from "react";

const SignupForm: React.FC = () => {
  return (
    <form className="bg-black/75 px-16 py-14 rounded-md max-w-md w-full text-white shadow-xl">
      <h1 className="text-3xl font-bold mb-8">Sign up</h1>

      {/* Inputs */}
      <div className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          className="bg-[#171717] p-4 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#fff]"
        />

        <input
          type="text"
          placeholder="Email or mobile number"
          className="bg-[#171717] p-4 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#fff]"
        />

        <input
          type="password"
          placeholder="Password"
          className="bg-[#171717] p-4 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#fff]"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-[#171717] p-4 rounded text-base focus:outline-none focus:ring-2 focus:ring-[#fff]"
        />

        <button
          type="submit"
          className="bg-[#e50914] hover:bg-[#f6121d] text-white font-semibold py-3 rounded mt-2"
        >
          Sign Up
        </button>
      </div>


      {/* Remember + Signup */}
      <div className="flex justify-between items-center mt-5 text-sm text-gray-400">
        <label className="flex items-center gap-2">
          <input type="checkbox" id="remember" />
          Remember me
        </label>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        Already a User?{" "}
        <a href="#" className="text-white hover:underline">
          Sign In now.
        </a>
      </div>

      {/* reCAPTCHA Text */}
      <p className="text-[13px] text-gray-500 mt-6 leading-snug">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <br/>
        <br/>
        <button
          type="button"
          className="text-blue-400 hover:underline text-[13px]"
        >
          Learn more.
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
