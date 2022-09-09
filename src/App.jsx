import React from "react";
import Navbar from './components/Navbar'
import './App.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="lg:h-screen relative z-10">
      <article className="m-4">
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
