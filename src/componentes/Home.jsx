import { useNavigate } from "react-router-dom";
import Mano1 from '../images/mano1.jpg'
import Mano2 from '../images/mano2.jpg'
import '../styles/Home.css';

const Home = () => {

  const navigate = useNavigate();
  const goSinglePlayer = () => navigate('/singleplayer');
  const goTwoPlayer = () => navigate('/twoplayer');

    return (
        <>
            <div className="welcome-all">
                <div> 
                    <h1>Welcome to this Game</h1>
                    <p>Rock, Paper, Scissor, Spock, Lizard</p>
                 </div>
                <div className="welcome" >
                    <img src={Mano1} className="img-mano"/>
                    <button onClick={goSinglePlayer} className="button-85"> ONE PLAYER</button>                
                </div>
                <div className="welcome" >
                    <img src={Mano2} className="img-mano"/>
                    <button onClick={goTwoPlayer} className="button-85"> TWO PLAYER</button>                
                </div>
            </div>
        </>
      );
};
    
export default Home;