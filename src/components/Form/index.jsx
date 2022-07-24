import { useState } from "react";

import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [input, setInput] = useState("");

  const addListTransactions = (newListTransactions) => {
    setListTransactions((oldListTransactions) => [
      ...oldListTransactions,
      newListTransactions,
    ]);
  };
  return (
    <form
      className="contentForm"
      onSubmit={(event) => {
        event.preventDefault();
        addListTransactions(input);
        // event.target.value = "";
      }}
    >
      <div className="divDescription">
        <label htmlFor="valueDescription">Descrição</label>
        <input
          className="inputDescription"
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          id="valueDescription"
          onChange={(event) => setInput(event.target.value)}
        />
        <span> Ex: Compra de roupas</span>
      </div>
      <div className="contentValues">
        <div className="divValueLeft">
          <label htmlFor="value">Valor</label>
          <input required type="number" id="value" placeholder="R$" />
        </div>
        <div className="divValueRight">
          <label htmlFor="typeValue">Tipo de valor</label>
          <select required className="selectOptions" id="typeValue">
            <option value=""> Entrada</option>
            <option value="">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
