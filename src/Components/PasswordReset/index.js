import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { BASE_URL } from "../../URLData";
import axios from "axios";
import './passwordReset.css';

const PasswordReset = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [error, setError] = useState("");
    const param = useParams();
    const navigate = useNavigate();

    
    const url = `https://password-reset-8wvo.onrender.com/api/password-reset/${param.id}/${param.token}`;

    useEffect(() => {
        const verifyUrl = async () => {
            try {
                await axios.get(url);
                setValidUrl(true);
            } catch (error) {
                setValidUrl(false);
            };
        };
        verifyUrl();
    },[param, url]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data } = await axios.post(url, { password });
            setMsg(data.message);
            setError("");
            navigate('/');
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <=500) {
                setError(error.response.data.message);
                setMsg("");
            };
        };
    };


    return (
        <>
            {validUrl ? (
                <div>
                    <div className="resetpassword">
                        <div className="row justify-content-center align-items-center w-100 h-100">
                            <div className="col-md-5">
                                <h1>Reset Password Field</h1>
                                <form onSubmit={handleSubmit}>
                                    <label className="mb-2 my-3">New Password</label>
                                    <input className="inputfield col-md-12" type="password"  name="password" placeholder="Enter Your Password" required
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />

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
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5">
                                <div className="lottie">
                                    <lottie-player
                                        src="https://assets2.lottiefiles.com/packages/lf20_z3pnisgt.json"
                                        background="transparent"
                                        speed="1"
                                        loop
                                        autoplay
                                    ></lottie-player>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>404 Not Found</h1>
            )}
        </>
    );
};

export default PasswordReset;