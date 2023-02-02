import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../URLData";
import './register.css';

const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        contactNumber:"",
        password: "",
    });

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };
    console.log("handleChange Value:", handleChange);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const url = `${BASE_URL}/api/signup`;
            const {data : res} = await axios.post(url, data);
            setMsg(res.message)
            navigate("/");
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <=500) {
                setError(error.response.data.message);
            };
        };
    };

    return (
        <>
            <div className="register">
                <div className="row justify-content-center align-items-center w-100 h-100">
                    <div className="col-md-5">
                        <div className="lottie">
                            <lottie-player
                                src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></lottie-player>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <h1>Registration Field</h1>
                        <form onSubmit={handleSubmit}>
                            <label className="mb-2 my-3">Name</label>
                            <input className="inputfield col-md-12" type="text" id="name" name="name" placeholder="Enter Your Name" required
                                value={data.name}
                                onChange={handleChange}
                            />
                            <label className="mb-2 my-3">Email</label>
                            <input className="inputfield col-md-12" type="email" id="email" name="email" placeholder="Enter Your Email" required
                                value={data.email}
                                onChange={handleChange}
                            />
                            <label className="mb-2 my-3">Contact Number</label>
                            <input className="inputfield col-md-12" type="num" id="contactNumber" name="contactNumber" placeholder="Enter Your Number" required
                                value={data.contactNumber}
                                onChange={handleChange}
                            />
                            <label className="mb-2 my-3">Password</label>
                            <input className="inputfield col-md-12" type="password" id="password" name="password" placeholder="Enter Your Password" required
                                value={data.password}
                                onChange={handleChange}
                            />

                            <div className="d-flex justify-content-center  my-2">
                                {
                                    error && <div className="error_msg">{error}</div>
                                }
                                {
                                    msg && <div className="success_msg">{msg}</div>
                                }
                            </div>

                            <div className="d-flex justify-content-between align-items-center my-2">
                                <Link to="/" className="text-primary my-2"><span style={{color: "blue", fontWeight: "bold"}}>Already registered User? Sign in</span></Link>
                                <button className="btn btn-primary my-2" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;