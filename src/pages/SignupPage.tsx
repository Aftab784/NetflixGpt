import React from "react";
import Header from "./Header";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";


const SignUp = () => {
    return (
        <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* ✅ Background image with subtle gradient fade */}
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/PK-en-20250929-TRIFECTA-perspective_3a93947a-fdcb-4562-ba2f-829aec50068f_large.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/50" />
      </div>

      {/* Header */}
      <div className="relative z-10">
        <Header />
      </div>

      {/* ✅ Form centered slightly higher */}
      <div className="relative z-10 flex justify-center items-start pt-[12vh] pb-[6vh]">
        <SignupForm />
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-8">
        <Footer />
      </div>
    </div>
    )
}

export default SignUp;