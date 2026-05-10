
import React from "react";
import Navbar from "../components/shared/Navbar";
import { montserrat } from "../layout";


const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className} min-h-screen flex flex-col`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;
