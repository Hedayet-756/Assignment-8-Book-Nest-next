// import BreakingNews from "@/components/shared/BreakingNews";
// import Header from "@/components/shared/Header";

import React from "react";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";

const MainLayout = ({ children }) => {
    return (
        <>
            {/* <Header />
            <BreakingNews /> */}
            <Navbar />
            <Header />
            {children}
        </>
    );
};

export default MainLayout;
