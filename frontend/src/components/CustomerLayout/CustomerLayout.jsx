import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/Header/index.jsx";
import Footer from "../components/Footer/index.jsx";

const CustomerLayout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

export default CustomerLayout;
