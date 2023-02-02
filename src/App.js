import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import ForgotPassword from "./Components/ForgetPassword";
import Home from "./Components/Home";
import PasswordReset from "./Components/PasswordReset";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
