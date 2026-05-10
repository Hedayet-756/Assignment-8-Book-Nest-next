// import BreakingNews from "@/components/shared/BreakingNews";
// import Header from "@/components/shared/Header";

import React from "react";
import Navbar from "../components/shared/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            {/* <Header />
            <BreakingNews /> */}
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;
