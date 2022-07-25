import { useState } from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <div className="App">
      <div className="App-main">
        {isLoggedIn ? (
          <>
            <Header setIsLogoutIn={setIsLoggedIn} />
            <div className="subContentApp">
              <div className="subContentForm">
                <Form setListTransactions={setListTransactions} />
                <TotalMoney listTransactions={listTransactions} />
              </div>
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </div>
          </>
        ) : (
          <Homepage setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </div>
  );
}

export default App;
