 import React, { useState, useEffect } from 'react';

const Game = () => {

  const [player, setPlayerState] = useState({})
  const [bot, setBotState] = useState({})


  const opciones = [
    {
      eleccion: "rock",
      derrota: ["scissors", "lizard"],
    },
    {
      eleccion: "paper",
      derrota: ["rock", "spock"],
    },
    {
      eleccion: "scissors",
      derrota: ["paper", "lizard"],
    },
    {
      eleccion: "spock",
      derrota: ["scissors", "rock"],
    },
    {
      eleccion: "lizard",
      derrota: ["spock", "paper"],
    },
  ];

  const choiseOption = (event) => {
    const payer = opciones.find(e => e.eleccion === event.target.textContent);
    setPlayerState(player)
    choiseBotPlayer();
  };

  const choiseBotPlayer = () => {
    const choise = opciones[Math.floor(Math.random() * opciones.length)];

    setBotState(choise);
  };

  const finalScore = () => {
    let finalS;
    if (player.derrota.contain(bot.eleccion) && player.eleccion){
      finalS = "Winner : Player";
    } else if (bot.derrota.contain(player.eleccion) && player.eleccion){
      finalS = "Winner : Bot";
    } else if (player.eleccion === player.eleccion && player.eleccion){
      finalS = "Winner : Draw";
    }
    return <h1>{finalS}</h1>

  }

  return(
          <>
            <p>Game</p>
            <h1>{finalScore} </h1>
            <main>
            <section>
            <div className="jugador">Payer</div>
            <div className="eleccion">{player.eleccion}</div>
            </section>
            <section>
            <div className="maquina">Bot</div>
            <div className="eleccion">{bot.eleccion}</div>
            </section>
            <div className="opciones">
              {opciones.map((e) => (
                <button  onClick={choiseOption}>{e.eleccion} </button>
              ))}
            </div>
            </main>
          </>   
      );
};

export default Game;