import React from "react";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {

    const [displayError, setDisplayError] = useState(false)
    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
    })
    
    const navigate = useNavigate();

    const handleDataChange = (e) => {
        setUserDetails( (prev) => ({...prev, [e.target.name] : e.target.value}));
    }; 

    let errorMessage;

    if(displayError) {
        errorMessage = <text className="signup-error"> Error during signup </text>
    }
    else {
        errorMessage = <div></div>
    }

    const signupHandler = async () => {
        try{
            console.log(userDetails)
            const res = await axios.post("http://localhost:8080/users", userDetails);
            setDisplayError(false)
            navigate("/home")
        } catch (err) {
            setDisplayError(true)
            console.log(err);
        }
    };

    return (
        <section>
            <Banner/>
            <div className="login-form">
                <input className="login-form-comps" placeholder="Username" name="username" onChange={handleDataChange}></input>
                <input className="login-form-comps" placeholder="Email" name="email" onChange={handleDataChange}></input>
                <input type="password" className="login-form-comps" placeholder="Password" name="password" onChange={handleDataChange}></input>
                {errorMessage}
                <button className="login-link-1" onClick={signupHandler}>Sign Up</button>
            </div>
        </section>
    );
};

export default Signup;