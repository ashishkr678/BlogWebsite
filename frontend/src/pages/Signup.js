import React from "react"
import signupImg from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template
            title="SignUp..."
            image={signupImg}
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}


export default Signup