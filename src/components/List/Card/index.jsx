import { BsTrash } from "react-icons/bs";

import "./style.css";

const Card = () => {
  return (
    <>
      <div className="contentLeft">
        <p>Salário - Mês Dezembro</p>
        <span>Entrada</span>
      </div>
      <div className="contentRight">
        <span>R$ 6.660,00</span>
        <button>
          <BsTrash />
        </button>
      </div>
    </>
  );
};

export default Card;
