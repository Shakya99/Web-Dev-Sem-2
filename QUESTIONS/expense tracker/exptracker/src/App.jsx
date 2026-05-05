import React, { useState } from "react";

// Reusable Component
const ExpenseCard = ({ title, amount, category }) => {
  const isHigh = amount > 3000;

  return (
    <div>
      <h3>{title}</h3>
      <p>Amount: ₹{amount}</p>
      <p>Category: {category}</p>

      {isHigh && <p>High Expense</p>}
    </div>
  );
};

// Parent Component
const ExpenseTracker = () => {
  const [expenses] = useState([
    { id: 1, title: "Groceries", amount: 2500, category: "Food" },
    { id: 2, title: "Rent", amount: 8000, category: "Housing" },
    { id: 3, title: "Shopping", amount: 3500, category: "Lifestyle" },
    { id: 4, title: "Transport", amount: 1500, category: "Travel" },
    { id: 5, title: "Electric Bill", amount: 2000, category: "Bills" },
    { id: 6, title: "Dinner", amount: 1200, category: "Food" }
  ]);

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>

      {expenses.map((exp) => (
        <ExpenseCard
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          category={exp.category}
        />
      ))}

      <h2>Total Expense: ₹{total}</h2>
    </div>
  );
};

export default ExpenseTracker;