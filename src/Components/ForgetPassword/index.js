import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../URLData";
import './forgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const url = `${BASE_URL}/api/password-reset`;
            const { data } = await axios.post(url, {email});
            setMsg(data.message);
            setError("");
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <=500) {
                setError(error.response.data.message);
                setMsg("");
            };
        };
    };


    return (
        <>
            <div className="forgotpassword">
                <div className="row justify-content-center align-items-center w-100 h-100">
                    <div className="col-md-5">
                        <h1>Forgot Password</h1>
                        <form onSubmit={handleSubmit}>
                            <label className="mb-2 my-3">Email</label>
                            <input className="inputfield col-md-12" type="email" id="email" name="email" placeholder="Enter Your Email" required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        

                            <div className="my-2">
                            Enter your account email, we'll send you a link to reset your password
                            </div>

                            <div className="d-flex justify-content-center">
                                {
                                    error && <div className="error_msg">{error}</div>
                                }
                                {
                                    msg && <div className="success_msg">{msg}</div>
                                }
                            </div>

                            <div className="d-flex justify-content-start">
                                <button className="press btn btn-primary my-2" type="submit">
                                    Send Mail
                                </button>
                            </div>

                            <div className="d-flex justify-content-between">
                                <Link to="/" className="text-primary"><span style={{color: "blue", fontWeight: "bold"}}>Click here to Sign in</span></Link>
                            </div>
                        </form>
                    </div>    
                

                    <div className="col-md-5">
                        <div className="lottie">
                            <lottie-player
                                src="https://assets2.lottiefiles.com/private_files/lf30_GjhcdO.json"
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

export default ForgotPassword;