
import ExpenseDate from "./ExpenseDate";
import ExpesnseDetails from "./ExpenseDetails";
import ExpenseAmount from "./ExpenseAmount";

import "./Expenseitem.css";

function Expenseitem(props) {
  return (
    <Card className="expense-item ">


      < ExpesnseDetails LocationOfExpenditure={props.LocationOfExpenditure}></ExpesnseDetails> 
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpesnseDetails title = {props.title}></ExpesnseDetails>
      < ExpenseAmount amount={props.amount}></ExpenseAmount>
    </Card>
  );
}
//done

export default Expenseitem;