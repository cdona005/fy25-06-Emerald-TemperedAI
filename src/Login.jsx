import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "./assets/EDUSENSE.svg";
import { useNavigate } from "react-router-dom";

/* TEMPORARY 
 * TODO: Replace with real API calls 
 * 
 */

export default function Login() {
  const [activeTab, setActiveTab] = useState("student"); 
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (activeTab === "student") {
      navigate("/student-dashboard");
    } else if (activeTab === "teacher") {
      navigate("/teacher-dashboard");
    } else {
      // temporary will change once we start connecting to backend
      console.log("Sign up data:", data);
      navigate("/student-dashboard"); // TEMPORARY
    }
    reset();
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#496677]/80 to-[#F0EAD8] z-0"></div>

      <div className="w-96 bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl z-10 overflow-hidden">
        <div className="flex justify-center py-6">
          <img src={logo} alt="EduSense Logo" className="w-100" />
        </div>

        {/* Tabs */}
        <div className="flex px-6 mb-6 gap-2">
          <button
            onClick={() => setActiveTab("student")}
            type="button"
            className={`flex-1 py-2 font-semibold rounded-full transition-all ${
              activeTab === "student"
                ? "bg-[#F0EAD8]/80 text-[#4a3f35] shadow-md hover:bg-[#F0EAD8]/90"
                : "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setActiveTab("teacher")}
            type="button"
            className={`flex-1 py-2 font-semibold rounded-full transition-all ${
              activeTab === "teacher"
                ? "bg-[#F0EAD8]/80 text-[#4a3f35] shadow-md hover:bg-[#F0EAD8]/90"
                : "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100"
            }`}
          >
            Teacher
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            type="button"
            className={`flex-1 py-2 font-semibold rounded-full transition-all ${
              activeTab === "signup"
                ? "bg-[#F0EAD8]/80 text-[#4a3f35] shadow-md hover:bg-[#F0EAD8]/90"
                : "border border-gray-300 text-gray-700 bg-transparent hover:bg-gray-100"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-col px-6 pb-6" onSubmit={handleSubmit(onSubmit)}>
          {activeTab === "signup" && (
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className="p-3 mb-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#F0EAD8]"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="p-3 mb-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#F0EAD8]"
          />
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="p-3 mb-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#F0EAD8]"
          />

          <button
            type="submit"
            className="w-full p-3 mt-2 rounded-full font-semibold text-[#4a3f35] bg-[#F0EAD8]/80 shadow-md hover:bg-[#F0EAD8]/90 transition-all"
          >
            {activeTab === "signup"
              ? "Create Account"
              : "Continue"}
          </button>
        </form>

        {activeTab !== "signup" && (
          <div className="mb-4 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-[#4a3f35] hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
