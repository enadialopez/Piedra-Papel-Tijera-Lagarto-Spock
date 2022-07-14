import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Rock from '../images/indicep.jpg'
import Paper from '../images/paper.png'
import Scissor from '../images/scissor.jpg'
import Lizard from '../images/lizard.jpg'
import Spock from '../images/spock.jpg'
import '../styles/Game.css';

const SinglePlayer = () => {

  const [player, setPlayerState] = useState({})
  const [pointPlayer, setPointPlayer] = useState(0) ;
  const [bot, setBotState] = useState({})
  const [result, setResultState] = useState("Good luck!")
  const [pointBot, setPointBot] = useState(0);
  const [gamePlayerCounter, setGamePlayerCounter] = useState(0);
  const [gameBotCounter, setGameBotCounter] = useState(0);

  const navigate = useNavigate();
  const goBack = () => navigate('/');
  
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
    setPlayerState(element);
    choiseBotPlayer();
  };

  const choiseBotPlayer = () => {
    const choise = opciones[Math.floor(Math.random() * opciones.length)];
    setBotState(choise);
  };

  const winPlayer = () => {
    setResultState ("Winner : Player")
    setPointPlayer(pointPlayer + 1)
  }

  const winBot = () => {
    setPointBot(pointBot + 1);
    setResultState("Winner : Bot");
  }

  const finalScore = (player, bot) => {
    if(( player.element === "rock") && ((bot.element === "scissor") || (bot.element === "lizard"))){
      winPlayer()
    }
    if (player.element === bot.element && player.element != null  && bot.element != null ){
      setResultState ("Draw")
    }
    if(( player.element === "rock") && ((bot.element ==="paper") || (bot.element === "spock"))){
      winBot()
    }
    if((player.element === "paper") && ((bot.element === "rock") || (bot.element === "spock"))){
      winPlayer()
    } 
    if((player.element === "paper") && ((bot.element === "scissor") || (bot.element === "lizard"))){
      winBot()
    }
    if((player.element === "scissor") && ((bot.element === "paper") || (bot.element === "lizard"))){
      winPlayer()
    }
    if((player.element === "scissor") && ((bot.element === "rock") || (bot.element === "spock"))){
      winBot()
    }
    if((player.element === "lizard") && ((bot.element === "paper") || (bot.element === "spock"))){
      winPlayer()
    }
    if((player.element === "lizard") && ((bot.element === "scissor") || (bot.element === "rock"))){
      winBot()
    }
    if((player.element === "spock") && ((bot.element === "scissor") || (bot.element === "rock"))){
      winPlayer()
    }
    if((player.element === "spock") && ((bot.element === "lizard") || (bot.element === "paper"))){
      winBot()
    }
  }

  useEffect(() => {
    if(player != null && bot != null){
      finalScore(player, bot)
      resetGame()
    }
  }, [player, bot])

  const resetAllGame = () => {
    setPlayerState({});
    setBotState({});
    setResultState("Good luck!");
    setPointBot(0);
    setPointPlayer(0);
    setGameBotCounter(0);
    setGamePlayerCounter(0);
}

const resetGame = () => {
    if (pointBot === 3){
      setGameBotCounter( gameBotCounter + 1);
      setResultState("You lost the game!");
      setPointBot(0);
      setPointPlayer(0);
      setPlayerState({});
      setBotState({});
    }
    if (pointPlayer === 3){
      setGamePlayerCounter( gamePlayerCounter + 1);
      setResultState("You won the game!");
      setPointBot(0);
      setPointPlayer(0);
      setPlayerState({});
      setBotState({});
    }
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
                    <p>Choise : {player.element}</p>
                    <p>Score : {pointPlayer}</p>
                    <p>Game : {gamePlayerCounter}</p>
                  </div>
                  <div className='img-jugador'>
                    <img src={player.img} className="img-jugador1"/>
                  </div>
                </div>
                <div className='center'>
                  <div>
                    <h1>{result}</h1>
                  </div> 
                  <p>Do you want to start again ?</p>
                  <button className="button-85" role="button" onClick={() => {resetAllGame()}}>reset</button><br/> 
                    <button onClick={goBack} className="button-85"> Back</button>
                </div>
                <div className='jugador2'>
                  <div className='data-jugador2'>
                    <h1>Bot</h1>
                    <p>Choise : {bot.element}</p>
                    <p>Score : {pointBot}</p>
                    <p>Game : {gameBotCounter}</p>
                  </div>
                  <div className='img-jugador'>
                    <img src={bot.img} className="img-jugador2"/>
                  </div>
                </div>
              </div> 
          </>   
      );
};

export default SinglePlayer;