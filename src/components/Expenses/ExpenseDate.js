import "./ExpenseDate.css"

function ExpenseDate(props) {
  const expenseDateMonth = props.date.toLocaleString("en-US", {month: "long"});
  const expenseDateYear = props.date.getFullYear();
  const expenseDateDay = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseDateMonth}</div>
      <div className="expense-date__year">{expenseDateYear}</div>
      <div className="expense-date__date">{expenseDateDay}</div>
    </div>
  );
}

export default ExpenseDate;
