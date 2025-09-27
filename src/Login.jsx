import React from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/EDUSENSE.svg"; 
//**Currently I only have the login checking localStorage (this is temporary)
// This in the future will call to Djano RestAPI
// SO that we are verifying with the backend and real database */

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData && userData.password === data.password) {
      console.log(`${userData.name} You Are Successfully Logged In`);
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      {/* Dot-grid Background */}
      <div
           className="absolute top-0 left-0 z-[-2] h-screen w-screen 
           bg-[#0d1b2a] 
           bg-[radial-gradient(#38bdf833_1px,#0d1b2a_1px)] 
           bg-[size:20px_20px]"
      ></div>

      {/* Login Card */}
      <div className="flex w-11/12 max-w-5xl h-[600px] bg-[#fdfaf3] rounded-xl shadow-2xl overflow-hidden">

        {/* Left Side (Logo) */}
        <div className="flex flex-1 bg-[#0d1b2a] justify-center items-center">
          <img src={logo} alt="EduSense Logo" className="w-56" />
        </div>

        {/* Right Side (Form) */}
        <div className="flex flex-2 flex-col justify-center p-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-[#0d1b2a] mb-2">Welcome to EduSense</h2>
          <p className="mb-6 text-gray-600">Log into your account</p>

          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d1b2a]"
            />
            {errors.email && <span className="text-red-500 text-sm">*Email is required</span>}

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="p-3 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0d1b2a]"
            />
            {errors.password && <span className="text-red-500 text-sm">*Password is required</span>}

            <button
              type="submit"
              className="p-3 mt-4 bg-[#0d1b2a] text-white rounded-md font-semibold hover:bg-[#1b263b] transition-colors"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
