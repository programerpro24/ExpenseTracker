import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense, editingExpense, onUpdateExpense, onCancelEdit }) => {
    const [formData, setFormData] = useState({
        amount: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        note: ''
    });

    const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];

    // Populate form when editingExpense changes
    useEffect(() => {
        if (editingExpense) {
            setFormData({
                amount: editingExpense.amount,
                category: editingExpense.category,
                date: editingExpense.date,
                note: editingExpense.note || ''
            });
        } else {
            setFormData({
                amount: '',
                category: '',
                date: new Date().toISOString().split('T')[0],
                note: ''
            });
        }
    }, [editingExpense]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.amount || !formData.category || !formData.date) return;

        const expenseData = {
            ...formData,
            amount: parseFloat(formData.amount),
        };

        if (editingExpense) {
            onUpdateExpense({
                ...expenseData,
                id: editingExpense.id
            });
        } else {
            onAddExpense({
                ...expenseData,
                id: Date.now().toString()
            });
        }

        // Form clearing is handled by the useEffect when editingExpense becomes null,
        // or we can clear it manually if adding new.
        if (!editingExpense) {
            setFormData({
                amount: '',
                category: '',
                date: new Date().toISOString().split('T')[0],
                note: ''
            });
        }
    };

    return (
        <Card className="expense-form-card">
            <h2>{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h2>
            <form onSubmit={handleSubmit} className="expense-form">
                <div className="form-group">
                    <label htmlFor="amount">Amount (₹)</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="0.00"
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Category</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group full-width">
                    <label htmlFor="note">Note (Optional)</label>
                    <input
                        type="text"
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder="e.g. Lunch with team"
                    />
                </div>

                <div className="form-actions">
                    {editingExpense && (
                        <Button type="button" variant="secondary" onClick={onCancelEdit} className="cancel-btn">
                            Cancel
                        </Button>
                    )}
                    <Button type="submit" variant="primary">
                        {editingExpense ? 'Update Expense' : 'Add Expense'}
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default ExpenseForm;
