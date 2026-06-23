import { useEffect } from "react";
import type { Theme } from "../models/themeModel";



export default function ThemeToggler({theme, setTheme}: Readonly<Theme>) {

    // useEffect(() => {
    //     const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //     setTheme(theme || preferDarkMode ? 'dark' : 'light');
    // }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('light', theme === 'light');
        document.documentElement.classList.toggle('dark', theme !== 'light');
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <button>
            <img src={theme === "dark"? "/sun_icon.svg": "/theme_icon.svg"} alt="halfmoon" onClick={() => setTheme((pre)=> pre === "dark" ? 'light' : 'dark')} className="size-8.5 p-1.5 border border-gray-500 rounded-full" />
        </button>
    );
}