import React from "react";

const LoginForm: React.FC = () => {
  return (
    <form className="bg-black/75 px-16 py-14 rounded-md max-w-md w-full text-white shadow-xl">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>

      {/* Inputs */}
      <div className="flex flex-col gap-5">
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

        <button
          type="submit"
          className="bg-[#e50914] hover:bg-[#f6121d] text-white font-semibold py-3 rounded mt-2"
        >
          Sign In
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center mt-6 text-gray-400 text-sm">
        <div className="h-[1px] bg-gray-600 w-full mr-2"></div>
        OR
        <div className="h-[1px] bg-gray-600 w-full ml-2"></div>
      </div>

      <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 w-full rounded mt-4">
        Use a Sign-In Code
      </button>

      {/* Forgot Password */}
      <div className="text-right mt-3">
        <a href="#" className="text-lg text-white underline hover:text-gray-400 bold">
          Forgot password?
        </a>
      </div>

      {/* Remember + Signup */}
      <div className="flex justify-between items-center mt-5 text-sm text-gray-400">
        <label className="flex items-center gap-2">
          <input type="checkbox" id="remember" />
          Remember me
        </label>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        New to Netflix?{" "}
        <a href="#" className="text-white hover:underline">
          Sign up now.
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

export default LoginForm;
