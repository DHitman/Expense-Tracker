
import Card from "../ui/card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2023');
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  }
  const filterdExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear


  });


  return (
    <div>


      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filterdYear} />
        <ExpenseChart expense = {filterdExpense} />
        <ExpenseList items={filterdExpense} />

      </Card>
    </div>
  );
}

export default Expenses;