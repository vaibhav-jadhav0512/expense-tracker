import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Food",
      amount: 99.5,
      date: new Date(2022, 7, 13),
    },
    {
      id: "e2",
      title: "Clothing",
      amount: 959.5,
      date: new Date(2022, 7, 15),
    },
    {
      id: "e3",
      title: "Bag",
      amount: 199.5,
      date: new Date(2022, 7, 19),
    },
    {
      id: "e4",
      title: "Bike",
      amount: 92229.5,
      date: new Date(2022, 7, 25),
    },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
