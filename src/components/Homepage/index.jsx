import image from "../../assets/image.svg";
import nuKenzie from "../../assets/nuKenzie.png";

import "./style.css";
import "animate.css";

const Homepage = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="divMainContent">
      <div className="contentLogin">
        <img src={nuKenzie} alt="" />
        <h2>Centralize o controle das suas finanças</h2>
        <span>de forma rápida e segura</span>
        <button onClick={handleLogin}>Iniciar</button>
      </div>
      <img src={image} alt="" className="imageNuKenzie" />
    </div>
  );
};

export default Homepage;
