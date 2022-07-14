import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './componentes/Home';
import './App.css';
import SinglePlayer from './componentes/SinglePlayer';
import TwoPlayer from './componentes/TwoPlayer';


const App = () => {
  
  return(
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/singleplayer" element={<SinglePlayer/>}/>
            <Route exact path="/twoplayer" element={<TwoPlayer/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App;
