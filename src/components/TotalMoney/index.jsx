import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const totalAccount = listTransactions.reduce((acc, transaction) => {
    return transaction.type === "Entrada"
      ? acc + Number(transaction.value)
      : acc - Number(transaction.value);
  }, 0);
  return (
    <div className="totalMoney">
      <h4>
        Valor total:<span>$ {totalAccount.toFixed(2)}</span>
      </h4>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
