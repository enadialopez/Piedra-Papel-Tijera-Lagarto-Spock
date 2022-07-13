import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './componentes/Navbar';
import Game from './componentes/Game';
import Rules from './componentes/Rules';
import './App.css';


const App = () => {
  
  return(
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Game/>}/>
            <Route exact path="/rules" element={<Rules/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App;
