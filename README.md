A modern, responsive web application for efficient personal finance management. Built with React and Vite, this Expense Tracker helps you stay on top of your spending with an intuitive interface and real-time calculations.

Vercel Live Link : https://expense-tracker-kohl-seven-28.vercel.app/

Features

Smart Expense Management: Easily add expenses with amount, category, date, and optional notes.
Edit & Update: Need to correct a mistake? Seamlessly edit existing expense entries.
Delete: Remove unwanted or accidental entries with a single click.
Real-time Dashboard: Instantly view your total expenditure with dynamic updates.
Auto-Persistence: Never lose your data! All expenses are automatically saved to your browser's local storage.
Fully Responsive: Optimized for all devices, from desktop monitors to mobile screens.
Categorization: Organize your spending with predefined categories like Food, Transport, Utilities, Entertainment, and Health.

Tech Stack

Frontend Framework: React.js (v18+)
Build Tool: Vite
Styling: Modern CSS with CSS Variables, Flexbox, and Grid layouts
State Management: React Hooks (useState, useEffect)
Data Persistence: Browser LocalStorage API

Getting Started
Follow these steps to set up the project locally on your machine.

Prerequisites

Ensure you have Node.js (v14 or higher) installed on your system.

Installation

1.  Clone the repository : git clone https://github.com/yourusername/expense-tracker.git
2.  Install dependencies : npm install
3.  Start the development server : npm run dev
    

4.  Open in Browser : The application will be available at `http://localhost:5173` (or the port shown in your terminal).

Project Structure


expense-tracker/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Dashboard/   # Dashboard & Summary cards
│   │   ├── ExpenseForm/ # Form inputs for adding/editing
│   │   ├── ExpenseList/ # List view of expenses
│   │   ├── Layout/      # Header and main layout wrappers
│   │   └── UI/          # Reusable UI components (Card, Button)
│   ├── App.jsx          # Main application logic
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & variables
├── index.html           # HTML template
└── package.json         # Project dependencies and scripts

