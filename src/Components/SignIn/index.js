import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../URLData";
import './signin.css';

const SignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };
    // console.log("handleChange Value:", handleChange);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const url = `${BASE_URL}/api/signin`;
            const {data : res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            navigate("/home");
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <=500) {
                setError(error.response.data.message);
            };
        };
    };

    return (
        <>
            <div className="signin">
                <div className="row justify-content-center align-items-center w-100 h-100">
                    

                    <div className="col-md-5">
                        <h1>SignIn Field</h1>
                        <form onSubmit={handleSubmit}>
                            <label className="mb-2 my-3">Email</label>
                            <input className="inputfield col-md-12" type="email" id="email" name="email" placeholder="Enter Your Email" required
                                value={data.email}
                                onChange={handleChange}
                            />
                            <label className="mb-2 my-3">Password</label>
                            <input className="inputfield col-md-12" type="password" id="password" name="password" placeholder="Enter Your Password" required
                                value={data.password}
                                onChange={handleChange}
                            />
                            <div className="d-flex justify-content-between my-3">
                                <Link to="/signup" className="text-primary my-2"><span style={{color: "blue", fontWeight: "bold"}}>Don't have an account? Sign Up</span></Link>
                                <Link to="/forgot-password" className="text-primary my-2"><span style={{color: "blue", fontWeight: "bold"}}>Did you forgot password? </span></Link>
                                
                            </div>

                            <div className="d-flex justify-content-center">
                                {
                                    error && <div className="error_msg">{error}</div>
                                }
                            </div>

                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary my-2 col-md-3 press" type="submit">Sign In</button>
                            </div>

                        </form>
                    </div>

                    <div className="col-md-5">
                        <div className="lottie">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_pprxh53t.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;