import { useState } from "react";
import type { Theme } from "../models/themeModel";
import ThemeToggler from "./ThemeToggler";

export default function Header({theme, setTheme}: Readonly<Theme>) {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white dark:bg-gray-900/70" style={{opacity: 1, transform: 'none'}}>
      {/* Logo */}
      <img src={theme === "dark" ? "/logo_white.svg": "/logo-dark.svg"} alt="agency-logo" className="w-32 sm:w-40" />
      <div className={`flex text-gray-700 dark:text-white sm:text-sm top-0 bottom-0 right-0 ${sidebar ? 'max-sm:w-60 max-sm:pl-10' : 'max-sm:w-0 max-sm:overflow-hidden'} max-sm:min-h-screen max-sm:h-full max-sm:fixed max-sm:flex-col max-sm:bg-blue-600 max-sm:text-white max-sm:pt-20 sm:flex sm:items-center gap-5 transition-all`}>
        <img src="/close.svg" alt="close" className="absolute right-4 top-4 w-5 sm:hidden" onClick={() => setSidebar(false)}/>
        <a href="#" className="sm:hover:border-b">Home</a>
        <a href="#services" className="sm:hover:border-b">Services</a>
        <a href="#our-work" className="sm:hover:border-b" >Our-Work</a>
        <a href="#contact-us" className="sm:hover:border-b">Contact Us</a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 cursor-pointer">
        <ThemeToggler theme={theme} setTheme={setTheme} />
        <img src="/hamburger.svg" alt="menu" className="w-8 sm:hidden" onClick={() => setSidebar(true)}/>
        <a href="#contacts" className="flex gap-2 items-center px-6 py-2 rounded-full max-sm:hidden bg-blue-600 text-sm text-white cursor-pointer hover:scale-103 transition-all">
            Connect <img src="/arrow_icon.svg" alt="arrow" width={14}/>
        </a>
      </div>
    </div>
  );
}
