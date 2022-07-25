import nuKenzieHeader from "../../assets/nuKenzieHeader.png";


import "./style.css";

const Header = ({ setIsLogoutIn }) => {
  const handleLogout = () => {
    setIsLogoutIn(false);
  };
  return (
    <header className="header">
      <div>
        <img src={nuKenzieHeader} alt="" />
        <button onClick={handleLogout}>Início</button>
      </div>
    </header>
  );
};

export default Header;
