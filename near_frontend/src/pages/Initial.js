import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Initial = () => {
    return (
        <div>
            <Link to="/login" className="login-link"> 
                    <span className="btn-txt">
                        Login
                    </span>
            </Link>
            <Link to="/signup" className="signup-link"> 
                    <span className="btn-txt">
                        Sign Up
                    </span>
            </Link>
            <Banner/>
        </div>
    );
};

export default Initial;