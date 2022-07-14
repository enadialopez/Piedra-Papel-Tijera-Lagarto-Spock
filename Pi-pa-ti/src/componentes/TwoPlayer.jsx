import React, {useEffect, useState} from 'react';
import Rock from '../images/indicep.jpg';
import Paper from '../images/paper.png';
import Scissor from '../images/scissor.jpg';
import Lizard from '../images/lizard.jpg';
import Spock from '../images/spock.jpg';
import '../styles/Game.css';

const TwoPlayer1 = () => {

  const [player1, setPlayer1State] = useState({})
  const [pointPlayer1, setPointPlayer1] = useState(0) ;
  const [player2, setplayer2State] = useState({})
  const [result, setResultState] = useState("Good luck!")
  const [pointplayer2, setPointplayer2] = useState(0);
  const [gamePlayer1Counter, setGamePlayer1Counter] = useState(0);
  const [gameplayer2Counter, setGameplayer2Counter] = useState(0);
  const [choise, setChoiseState] = useState(true);
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
    if (choise){
        setPlayer1State(element);
        setChoiseState(false)
    } else {
        setplayer2State(element);
        setChoiseState(true)
    }
  };

  const winPlayer1 = () => {
    setResultState ("Winner : Player 1")
    setPointPlayer1(pointPlayer1 + 1)
  }

  const winplayer2 = () => {
    setPointplayer2(pointplayer2 + 1);
    setResultState("Winner : Player 2");
  }

  const finalScore = (player1, player2) => {
    if(( player1.element === "rock") && ((player2.element === "scissor") || (player2.element === "lizard"))){
      winPlayer1()
    }
    if (player1.element === player2.element && player1.element != null  && player2.element != null ){
      setResultState ("Draw")
    }
    if(( player1.element === "rock") && ((player2.element ==="paper") || (player2.element === "spock"))){
      winplayer2()
    }
    if((player1.element === "paper") && ((player2.element === "rock") || (player2.element === "spock"))){
      winPlayer1()
    } 
    if((player1.element === "paper") && ((player2.element === "scissor") || (player2.element === "lizard"))){
      winplayer2()
    }
    if((player1.element === "scissor") && ((player2.element === "paper") || (player2.element === "lizard"))){
      winPlayer1()
    }
    if((player1.element === "scissor") && ((player2.element === "rock") || (player2.element === "spock"))){
      winplayer2()
    }
    if((player1.element === "lizard") && ((player2.element === "paper") || (player2.element === "spock"))){
      winPlayer1()
    }
    if((player1.element === "lizard") && ((player2.element === "scissor") || (player2.element === "rock"))){
      winplayer2()
    }
    if((player1.element === "spock") && ((player2.element === "scissor") || (player2.element === "rock"))){
      winPlayer1()
    }
    if((player1.element === "spock") && ((player2.element === "lizard") || (player2.element === "paper"))){
      winplayer2()
    }
  }

  useEffect(() => {
    if(player1 != null && player2 != null && choise){
      finalScore(player1, player2)
      resetGame()
    }
  }, [player1, player2])

  const resetAllGame = () => {
    setPlayer1State({});
    setplayer2State({});
    setResultState("Good luck!");
    setPointplayer2(0);
    setPointPlayer1(0);
    setGameplayer2Counter(0);
    setGamePlayer1Counter(0);
}

const resetGame = () => {
    if (pointplayer2 === 3){
      setGameplayer2Counter( gameplayer2Counter + 1);
      setResultState("You lost the game!");
      setPointplayer2(0);
      setPointPlayer1(0);
      setPlayer1State({});
      setplayer2State({});
    }
    if (pointPlayer1 === 3){
      setGamePlayer1Counter( gamePlayer1Counter + 1);
      setResultState("You won the game!");
      setPointplayer2(0);
      setPointPlayer1(0);
      setPlayer1State({});
      setplayer2State({});
    }
}

const showGame = () => {
    if (!choise) {
        return (
            <div className="jugada">            
                <div className='jugador1'>
                    <div className='data-jugador1'>
                        <h1>Player 1</h1>
                        <p>Choise : </p>
                        <p>Score : </p>
                        <p>Game : </p>
                    </div>
                    
                </div>
                <div className='center'>
                    <p>Do you want to start again ?</p>
                    <button className="button-85" role="button" onClick={() => {resetAllGame()}}>reset</button> 
                </div>
                <div className='jugador2'>
                    <div className='data-jugador2'>
                        <h1>player 2</h1>
                        <p>Choise : </p>
                        <p>Score : </p>
                        <p>Game : </p>
                    </div>
                    <div className='img-jugador'>
                        <img src={player2.img} className="img-jugador2"/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="jugada">            
                <div className='jugador1'>
                    <div className='data-jugador1'>
                        <h1>Player 1</h1>
                        <p>Choise : {player1.element}</p>
                        <p>Score : {pointPlayer1}</p>
                        <p>Game : {gamePlayer1Counter}</p>
                    </div>
                    <div className='img-jugador'>
                        <img src={player1.img} className="img-jugador1"/>
                    </div>
                </div>
                <div className='center'>
                    <div>
                        <h1>{result}</h1>
                    </div> 
                    <p>Do you want to start again ?</p>
                    <button className="button-85" role="button" onClick={() => {resetAllGame()}}>reset</button> 
                </div>
                <div className='jugador2'>
                    <div className='data-jugador2'>
                        <h1>player 2</h1>
                        <p>Choise : {player2.element}</p>
                        <p>Score : {pointplayer2}</p>
                        <p>Game : {gameplayer2Counter}</p>
                    </div>
                    <div className='img-jugador'>
                        <img src={player2.img} className="img-jugador2"/>
                    </div>
                </div>
            </div>
        )
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
            {showGame()} 
          </>   
      );
};

export default TwoPlayer1;