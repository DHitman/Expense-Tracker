import "./ExpenseList.css"
import ExpenseItem from "./ExpsenseItem";
const ExpenseList = (props) =>{
  
    let expensecontent =<h2 className="expenses-list__fallback">Found no Expense</h2> ;

    if(props.items.length>0)
    {
      expensecontent =props.items.map((expense) => {
        return (<ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}></ExpenseItem>)
      });
  
    }
   

    return (
       <ul className="expenses-list">
        {expensecontent}
       </ul>
    );
}

export default ExpenseList;