import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './componentes/Navbar';
import Game from './componentes/Game';
import Rules from './componentes/Rules';
import './App.css';


const App = () => {
const [score, setScore] = useState(0)  
  
  return(
    <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route exact path="/game" element={<Game/>}/>
            <Route exact path="/rules" element={<Rules/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
};

export default App;
