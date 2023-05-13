import Expenses from "./compo/expense/Expense";
import NewExpense from "./compo/NewExpense/NewExpense";
import { useState } from "react";
import Footer from "./compo/Footer/Footer";
import Head from "./compo/Head/Head";

 const dummyExpense = [
  {id:1,title : 'car insurance',amount:6999 , date : new Date(2022,6,22)},
  {id:2,title : 'stock market',amount:499 , date : new Date(2019,5,19)},
  {id:3,title : 'wifi bill',amount:1200 , date : new Date(2019, 4, 19)},
  {id:4,title : 'rent',amount:7500 , date : new Date(2019,6,19)},
  
]

function App() {
  const [expense, setExpense] = useState(dummyExpense)
  

  const addExpenseHandler = (expenses) =>{
    setExpense((prevExpense)=>{
      return [expenses,...prevExpense];
    });
  }
  return(
    <>  
    <Head/>
         <NewExpense 
          onAddExpense = {addExpenseHandler}
         />
         <Expenses items ={expense}/>
          <Footer />
        </>
  );
}

export default App;
