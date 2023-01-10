import React from "react";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = (props) => {
    const [displayError, setDisplayError] = useState(false)
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    let errorMessage;
    if (displayError){
        errorMessage = <text className="signup-error"> Incorrect username and/or password </text>;
    }
    else {
        errorMessage = <div></div>;
    }

    const handleDataChange = (e) => {
        setLoginDetails( (prev) => ({ ...prev, [e.target.name]: e.target.value}))
    }

    const loginHandler = async () => {
        try{
            console.log(loginDetails)
            const res = await axios.get("http://localhost:8080/users", { params: { username: loginDetails.username }})
            console.log(res.data)
            if(loginDetails.password == res.data[0].password){
                setDisplayError(false)
                navigate("/home")
            }
            else{
                setDisplayError(true)
            }
        }
        catch(err){
            setDisplayError(true)
            console.log(err)
        }
    };

    return (
        <section>
            <Banner/>
            <div className="login-form">
                <input className="login-form-comps" placeholder="Username" name="username" onChange={handleDataChange}></input>
                <input type="password" className="login-form-comps" placeholder="Password" name="password" onChange={handleDataChange}></input>
                {errorMessage}
                <button className="login-link-1" onClick={loginHandler}>Login</button>
            </div>
        </section>
    );
};

export default Login;