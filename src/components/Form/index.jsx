import { useState } from "react";

import "./style.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("Entrada");

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
        addListTransactions({
          description: inputDescription,
          type: inputType,
          value: Number(inputValue).toFixed(2),
        });
        event.target[0].value = "";
        event.target[1].value = "";
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
          onChange={(event) => setInputDescription(event.target.value)}
        />
        <span> Ex: Compra de roupas</span>
      </div>
      <div className="contentValues">
        <div className="divValueLeft">
          <label htmlFor="value">Valor</label>
          <input
            required
            type="number"
            id="value"
            placeholder="R$"
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div className="divValueRight">
          <label htmlFor="typeValue">Tipo de valor</label>
          <select
            required
            className="selectOptions"
            id="typeValue"
            onChange={(event) => setInputType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
