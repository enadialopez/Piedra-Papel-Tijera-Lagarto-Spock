import React, {useState} from 'react';
import Rock from '../images/indicep.jpg'
import Paper from '../images/paper.png'
import Scissor from '../images/scissor.jpg'
import Lizard from '../images/lizard.jpg'
import Spock from '../images/spock.jpg'
import '../styles/Game.css';



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
    if((player.element === "scissor") && ((bot.element === "paper") || (bot.element === "lizard"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    }
    if((player.element === "scissor") && ((bot.element === "rock") || (bot.element === "spock"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
    if((player.element === "lizard") && ((bot.element === "paper") || (bot.element === "spock"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    }
    if((player.element === "lizard") && ((bot.element === "scissor") || (bot.element === "rock"))){
      setPointBot(pointBot + 1);
      setResultState("Winner : Bot");
    }
    if((player.element === "spock") && ((bot.element === "scissor") || (bot.element === "rock"))){
      setPointPlayer(pointPlayer + 1)
      setResultState ("Winner : Player")
    }
    if((player.element === "spock") && ((bot.element === "lizard") || (bot.element === "paper"))){
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
            <h1>Rock, Paper, Scissor, Spock, Lizard</h1>

            <div className="opciones">
                 {opciones.map((select, index) => (
                  <button className="boton" onClick={()=>choiseOption(select)}>
                    <img key ={index} src={select.img} className="img"/>
                  </button>  
                ))}
              </div>
              <div className="jugada">            
                <div className='jugador1'>
                  <div className='data-jugador1'>
                    <h1>Player</h1>
                    <p>Choise :{player.element}</p>
                    <p>Score player : {pointPlayer}</p>
                  </div>
                  <div className='img-jugador'>
                    <img src={player.img} className="img-jugador1"/>
                  </div>
                </div>
                <div className='center'>
                  <h1>{result}</h1>
                  <p>Do you want to start again ?</p>
                  <button className="btn-reset" onClick={() => {reset()}}>reset</button> 
                </div>
                <div className='jugador2'>
                  <div className='data-jugador2'>
                    <h1>Bot</h1>
                    <p>Choise : {bot.element}</p>
                    <p>Score bot : {pointBot}</p>
                  </div>
                  <div className='img-jugador'>
                    <img src={bot.img} className="img-jugador2"/>
                  </div>
                </div>
              </div>
          </>   
      );
};

export default Game;