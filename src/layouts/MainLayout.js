import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function MainLayout(){
    return(
        <div>
            <Header />
            <Outlet />
            <Footer style={{position: "relative"}}/>
        </div>
    );
};

export default MainLayout;

