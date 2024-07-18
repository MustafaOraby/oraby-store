import { useState, useEffect } from "react";

function useTheme() {
    // Initialize the theme from local storage or default to 'light'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    // Apply the theme to the document
    useEffect(() => {
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
        return () => {
            document.documentElement.classList.remove(theme);
        };
    }, [theme]);

    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { changeTheme, theme };
}

export default useTheme;