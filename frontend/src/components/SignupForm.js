import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  async function register(ev) {
    console.log(process.env.BACKEND_URL);
    ev.preventDefault();
    const response = await fetch(`https://blog-api-uupp.onrender.com/auth/signup`, {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, username, email , password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      navigate("/posts")
      toast.success("Account Created")
    } else {
      toast.error("Something went wrong")
    }
  }

  return (
    <div>
      <form onSubmit={register}>
        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={ev => setFirstName(ev.target.value)}
              placeholder="Enter First Name"
              value={firstName}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>

          <label htmlFor="" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={ev => setLastName(ev.target.value)}  
              placeholder="Enter Last Name"
              value={lastName}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
          </label>
        </div>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Username<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            type="text"
            value={username}
            onChange={ev => setUsername(ev.target.value)}
            placeholder="Enter Username"
            name="username"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>

        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>

          <input
            required
            type="email"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            placeholder="Enter Email Address"
            name="email"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>

        <div className="flex gap-x-4">
          <label htmlFor="" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showCreatePassword ? "text" : "password"}
              name="password"
              onChange={ev => setPassword(ev.target.value)}
              placeholder="Enter Password"
              value={password}
              className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
            />
            <span
              onClick={() => setShowCreatePassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

        </div>

        <button 
        onClick={() =>{
            setIsLoggedIn(true);
        }}
        className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
