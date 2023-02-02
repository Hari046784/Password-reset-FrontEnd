import React from "react";
import { useNavigate } from "react-router-dom";
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    const handleSignIn = () => {
        navigate('/');
    };
        

    return (
        <>
            <div className="layout">
                <div className="header d-flex justify-content-between align-items-center arrange ">
                    <div>
                        <h1 className="logo">Welcome</h1>
                    </div>
                    <div className="d-flex">
                        <button className="justify-content-end signout arrange" varient="light"
                            onClick={handleSignOut}
                        >SignOut</button>
                        <button className="justify-content-end signout" varient="light"
                            onClick={handleSignIn}
                        >SignIn Page</button>
                    </div>
                </div>

                <div className="content d-flex justify-content-center">
                    <h1>User successfully signed in...</h1>
                </div>
            </div>
        </>
    );
};

export default Home;

