import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import { Toaster } from 'react-hot-toast';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') ? localStorage.getItem('theme') as string : "light");

  return (
    <div className=" bg-white/50 dark:bg-black relative">
        <Toaster />
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer theme={theme}/>
    </div>
  );
}

export default App
