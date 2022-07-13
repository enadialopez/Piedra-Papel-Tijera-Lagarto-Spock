import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './componentes/Home';
import Rules from './componentes/Rules';
import './App.css';
import SinglePlayer from './componentes/SinglePlayer';


const App = () => {
  
  return(
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/singleplayer" element={<SinglePlayer/>}/>
            <Route exact path="/rules" element={<Rules/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App;
