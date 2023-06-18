import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import AboutMe from './Components/About-me';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Volunteering from './Components/Volunteering'
import HireMe from './Components/HireMe'

import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Education/>
      <Projects/>
      <Volunteering/>
      <HireMe/>
      <Footer/>
    </div>
  );
}

export default App;
