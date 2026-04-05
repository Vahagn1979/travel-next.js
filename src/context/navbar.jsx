"use client";

import { createContext, useContext, useState } from "react";

const NavbarContext = createContext(undefined, undefined);

export const NavbarProvider = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <NavbarContext.Provider value={{showNavbar, setShowNavbar}}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => useContext(NavbarContext);