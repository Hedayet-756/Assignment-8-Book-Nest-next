// import BreakingNews from "@/components/shared/BreakingNews";
// import Header from "@/components/shared/Header";

import React from "react";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import NewAddedBooks from "../components/shared/NewAddedBooks";

const MainLayout = ({ children }) => {
    return (
        <>

            {/* <BreakingNews /> */}
            <Navbar />
            <Header />
            <NewAddedBooks />
            {children}
        </>
    );
};

export default MainLayout;
