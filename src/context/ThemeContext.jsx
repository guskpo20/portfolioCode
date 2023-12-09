"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () =>{
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark")
    }

    const [userLang, setUserLang] = useState("es")

    useEffect(() => {
      setUserLang(navigator.language || navigator.userLanguage);
    }, []);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, userLang}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);