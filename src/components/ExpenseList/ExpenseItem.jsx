import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
    const date = new Date(expense.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <li className="expense-item">
            <Card className="expense-item-card">
                <div className="expense-date">
                    <span className="month">{date.toLocaleString('default', { month: 'short' })}</span>
                    <span className="day">{date.getDate()}</span>
                </div>
                <div className="expense-description">
                    <h3>{expense.category}</h3>
                    <span className="note">{expense.note}</span>
                </div>
                <div className="expense-amount">
                    ₹{expense.amount.toFixed(2)}
                </div>
                <div className="expense-actions">
                    <Button variant="primary" onClick={() => onEdit(expense)} className="edit-btn">
                        Edit
                    </Button>
                    <Button variant="danger" onClick={() => onDelete(expense.id)} className="delete-btn">
                        Delete
                    </Button>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
