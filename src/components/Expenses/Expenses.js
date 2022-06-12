import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = () => {
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
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};

export default Expenses;
