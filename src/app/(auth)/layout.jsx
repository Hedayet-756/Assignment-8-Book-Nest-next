
import React from "react";
import Navbar from "../components/shared/Navbar";
import { montserrat } from "../layout";
import FooterPage from "../components/shared/FooterPage";


const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className={`${montserrat.className} min-h-screen flex flex-col`}>
                {children}
            </div>
            <FooterPage />
        </>
    );
};

export default AuthLayout;
