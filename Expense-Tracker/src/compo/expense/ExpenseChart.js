import Chart from "../chart/Chart";

const ExpenseChart = (props) => {

    const chartDataPoint = [
        { label: 'jan', value: 0 },
        { label: 'feb', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'apr', value: 0 },
        { label: 'may', value: 0 },
        { label: 'jun', value: 0 },
        { label: 'jul', value: 0 },
        { label: 'aug', value: 0 },
        { label: 'sep', value: 0 },
        { label: 'oct', value: 0 },
        { label: 'nov', value: 0 },
        { label: 'dec', value: 0 },
    ]

    for(const expenses of props.expense){
       const expenseMonth = expenses.date.getMonth();
       chartDataPoint[expenseMonth].value += expenses.amount;
    }
    return (
        <Chart dataPoints = {chartDataPoint} />
    );
}

export default ExpenseChart; 