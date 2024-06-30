import React from "react";
import Home from "./components/Home/Home";
// import Login from "./components/LogIn/Login";
import Login from "./components/LogIn/LogIn";

const AuthGuard = (token) => {
    const auth = (token != null) ? true : false;
    return auth ? <Home /> : <Login />;
}

export default AuthGuard;