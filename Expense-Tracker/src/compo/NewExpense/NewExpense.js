
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () =>{
        setIsEditing(true);
    }
    const stopEditingHandler = () =>{
        setIsEditing(false);
    }
    const SaveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };
      props.onAddExpense(expenseData);
      setIsEditing(false)
    }
    return (
        <div className='new-expense '>
    
            
            {isEditing ? (<ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={SaveExpenseDatahandler} />) : (    <button onClick={startEditingHandler}>Add New Expense</button>)}
        </div>
    );
};

export default NewExpense;