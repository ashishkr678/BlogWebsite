import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
        
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        
        <Link >
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        <nav>
          <ul className="flex gap-x-6 text-richblack-100">
            <li>
              <Link >Home</Link>
            </li>
            <li>
              <Link >About</Link>
            </li>
            <li>
              <Link >Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-4 text-richblack-100">
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/signup">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log Out
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
