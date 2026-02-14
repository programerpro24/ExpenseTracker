import React from 'react';
import ExpenseItem from './ExpenseItem';
import EmptyState from '../EmptyState/EmptyState';
import './ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
    if (expenses.length === 0) {
        return <EmptyState />;
    }

    return (
        <ul className="expense-list">
            {expenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    onDelete={onDeleteExpense}
                    onEdit={onEditExpense}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;
