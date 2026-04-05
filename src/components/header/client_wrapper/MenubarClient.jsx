"use client";

import { useState } from "react";
import Navbar from "../navbar";
import Menubar from "../menubar/Menubar";

const MenubarClient = ({ navbarResp }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <>
            <Menubar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
            <Navbar data={navbarResp} showNavbar={showNavbar}/>
        </>
    );
};

export default MenubarClient;