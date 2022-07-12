import React, {useState} from 'react';
import Rock from '../images/rock.jpg'
import Paper from '../images/paper.png'
import Scissor from '../images/scissor.jpg'
import Lizard from '../images/lizard.jpg'
import Spock from '../images/spock.jpg'


const Game = () => {

  const [player, setPlayerState] = useState({})
  const [pointPlayer, setPointPlayer] = useState(0) ;
  const [bot, setBotState] = useState({})
  const [result, setResultState] = useState("")
  const [pointBot, setPointBot] = useState(0) ;


  const opciones =  [
    {
      element: "rock",
      img: Rock,
    },
    {
      element: "paper",
      img: Paper,
    },
    {
      element: "scissor",
      img: Scissor,
    },
    {
      element: "spock",
      img: Spock,
    },
    {
      element: "lizard",
      img: Lizard
    },
  ];

  const choiseOption = (element) => {
    setPlayerState(element)
    choiseBotPlayer();
    finalScore(player, bot);
  };

  const choiseBotPlayer = () => {
    const choise = opciones[Math.floor(Math.random() * opciones.length)];
    setBotState(choise);
  };

  const finalScore = (player, bot) => {
    if(( player.element === "rock") && ((bot.element === "scissor") || (bot.element === "lizard"))){
      setResultState ("Winner : Player")
      setPointPlayer(pointPlayer + 1)
    }
    if (player.element === bot.element){
      setResultState ("Draw")
    }
    if(( player.element === "rock") && ((bot.element ==="paper") || (bot.element === "spock"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
    if((player.element === "paper") && ((bot.element === "rock") || (bot.element === "spock"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    } 
    if((player.element === "paper") && ((bot.element === "scissor") || (bot.element === "lizard"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
    if((player.element === "scissor") && ((bot.element === "Papel") || (bot.element === "lizard"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    }
    if((player.element === "scissor") && ((bot.element === "Piedra") || (bot.element === "Spock"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
    if((player.element === "lizard") && ((bot.element === "Papel") || (bot.element === "Spock"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    }
    if((player.element === "lizard") && ((bot.element === "scissor") || (bot.element === "Piedra"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
    if((player.element === "Spock") && ((bot.element === "scissor") || (bot.element === "Piedra"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    }
    if((player.element === "Spock") && ((bot.element === "Lagarto") || (bot.element === "Papel"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
  }

  const reset = () => {
    setPlayerState({});
    setBotState({});
    setResultState("");
    setPointBot(0);
    setPointPlayer(0);
}

  return(
          <>
            <p>Game</p>            
                <div className="jugador">Payer</div>
                <div>Choise player :{player.element}</div>
                <p>Point player : {pointPlayer}</p>
             
                <div className="maquina">Bot</div>
                <div className="eleccion">Choise player: {bot.element}</div>
                <p>Point bot : {pointBot}</p>
             
              <div className="opciones">
                 {opciones.map((select, index) => (
                  <button className="botonPapel" onClick={()=>choiseOption(select)}>
                    <img key ={index} src={select.img} className="img"/>
                  </button>  
                ))}
              </div>
            
            <div className="jugador1 col-md-2 col-2">
                        <p>¿ Quieres empezar de 0 ?</p>
                        <button className="btn btn-info" onClick={() => {reset()}}>Volver a empezar</button> 
                               
                    </div>
          </>   
      );
};

export default Game;