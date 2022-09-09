import React from "react";
import Navbar from './components/Navbar'
import './App.css'
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="lg:h-screen relative z-10">
      <article className="m-4 mb-0">
        <Navbar />
        <div className="py-12">
          <Card />
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default App;
