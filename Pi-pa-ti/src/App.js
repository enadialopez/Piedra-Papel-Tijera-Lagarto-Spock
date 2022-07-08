import React, { useState, useEffect } from 'react';
import Navbar from './componentes/Navbar'
import Game from './componentes/Game'
import Rules from './componentes/Rules'
import './App.css';


const App = () => {
const [score, setScore] = useState(0)  
  
  return(
        <div>
          <Navbar/>
          <Game/>
          <Rules/>
        </div>
      );
};

export default App;
