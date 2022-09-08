import React from "react";
import Navbar from './components/Navbar'
import Bg from './assets/background.png'
import BgItem from './assets/hero-icon.png'
import './App.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="h-screen relative z-10" style={{ "background": { Bg } }}>
      <article className="m-4">
        <div className="absolute left-1/2 top-[6.5rem] transform translate-x-[-50%]">
          <img className="w-20 lg:w-28" src={BgItem} alt="Icon" />
        </div>
        <Navbar />
        <div className="pt-44 pb-12">
          <Card />
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default App;
