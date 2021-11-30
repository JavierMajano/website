import React from 'react';
import Navbar from "./components/Header/navbar";
import About from './components/About'
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from './components/footer/footer'
import './App.css';



function App() {
  return (
   
      <main className='text-gray-400 bg-gray-900 body-font' >
        
        <Navbar />
        <About />
        <Projects />
        <Skills />
        {/* <Contact className='app'/> */}
        <Footer />
      </main>
  );
}

export default App;
