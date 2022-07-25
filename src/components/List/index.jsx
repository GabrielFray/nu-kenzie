import Card from "../Card";
import noCard from "../../assets/noCard.png";
import { useState } from "react";
import FlatList from "flatlist-react";

import "./style.css";

const List = ({ listTransactions, setListTransactions }) => {
  const [filteringTransactions, setFilteringTransactions] = useState("Todos");
  const changeFilter = (section) => {
    setFilteringTransactions(section);
  };

  const handleRemoveCard = (item) => {
    const data = listTransactions.filter((element) => element !== item);
    setListTransactions(data);
  };
  return (
    <div className="contentDashboard">
      <div className="menuNav">
        <h3>Resumo financeiro</h3>
        <nav>
          <button
            className="button1"
            type="button"
            onClick={() => changeFilter("Todos")}
          >
            Todos
          </button>
          <button
            className="button2"
            type="button"
            onClick={() => changeFilter("Entrada")}
          >
            Entradas
          </button>
          <button
            className="button3"
            type="button"
            onClick={() => changeFilter("Despesa")}
          >
            Despesas
          </button>
        </nav>
      </div>
      <ul className="contentList">
        <FlatList
          list={listTransactions}
          renderItem={(transaction, index) => (
            <Card
              transaction={transaction}
              setListTransactions={setListTransactions}
              handleRemoveCard={handleRemoveCard}
              key={index}
            />
          )}
          filterBy={(transaction) =>
            filteringTransactions === "Todos"
              ? transaction.type !== filteringTransactions
              : transaction.type === filteringTransactions
          }
          renderWhenEmpty={() => (
            <>
              <h2 className="titleNothing">
                Você ainda não possui nenhum lançamento
              </h2>
              <ul className="contentList">
                <img src={noCard} alt="" />
              </ul>
            </>
          )}
        />
      </ul>
    </div>
  );
};

export default List;
