import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import NavbarHome from './Components/Navbar/Navbar';
import Web from './Components/Web/Web';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NavbarHome />
      <header>
        <Home />
      </header>
      <main>
        <Web />
        <Skills />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;