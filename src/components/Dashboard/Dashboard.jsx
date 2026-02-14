import React from 'react';
import Card from '../UI/Card';
import './Dashboard.css';

const Dashboard = ({ total_expenses }) => {
    return (
        <section className="dashboard">
            <Card className="dashboard-card">
                <h3>Total Expenses</h3>
                <p className="total-amount">₹{total_expenses.toFixed(2)}</p>
            </Card>
            {/* Can add more stats here later like "Most recent" or "Highest category" */}
        </section>
    );
};

export default Dashboard;
