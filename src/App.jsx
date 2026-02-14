import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import ExpenseList from './components/ExpenseList/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const startEditingHandler = (expense) => {
    setEditingExpense(expense);
    // Optional: Scroll to top or form if needed, but sticky layout handles it well.
  };

  const updateExpenseHandler = (updatedExpense) => {
    setExpenses((prevExpenses) => {
      const updatedList = prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      );
      return updatedList;
    });
    setEditingExpense(null); // Exit edit mode
  };

  const cancelEditHandler = () => {
    setEditingExpense(null);
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== expenseId);
    });
    // If deleting the item currently being edited, clear edit state
    if (editingExpense && editingExpense.id === expenseId) {
      setEditingExpense(null);
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Dashboard total_expenses={totalExpenses} />
        <div className="content-grid">
          <section className="form-section">
            <ExpenseForm
              onAddExpense={addExpenseHandler}
              editingExpense={editingExpense}
              onUpdateExpense={updateExpenseHandler}
              onCancelEdit={cancelEditHandler}
            />
          </section>
          <section className="list-section">
            <ExpenseList
              expenses={expenses}
              onDeleteExpense={deleteExpenseHandler}
              onEditExpense={startEditingHandler}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
