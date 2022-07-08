import React, { useState, useEffect } from 'react';


const Game = () => {

  const [results, setResults] = useState('')

  return(			 
          <>
            <p>Game</p>
            <button name="paper">paper</button>
            <button name="scissors">scissors</button>
            <button name="rock">rock</button>
            <button name="lizard">lizard</button>
            <button name="spock">spock</button>
          </>   
      );
};

export default Game;