import React from 'react';
import './EmptyState.css';

const EmptyState = () => {
    return (
        <div className="empty-state">
            <p>No expenses found. Start by adding one above!</p>
        </div>
    );
};

export default EmptyState;
