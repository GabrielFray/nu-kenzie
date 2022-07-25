import { BsTrash } from "react-icons/bs";

import "./style.css";

const Card = ({ transaction, handleRemoveCard }) => {
  const changeColor = transaction.type === "Entrada" ? "colorGreen" : "";

  return (
    <li className={`listCard ${changeColor}`}>
      <div className="contentLeft">
        <p>{transaction.description}</p>
        <span>{transaction.type}</span>
      </div>
      <div className="contentRight">
        <span>{transaction.value}</span>
        <button onClick={() => handleRemoveCard(transaction)}>
          <BsTrash />
        </button>
      </div>
    </li>
  );
};

export default Card;
