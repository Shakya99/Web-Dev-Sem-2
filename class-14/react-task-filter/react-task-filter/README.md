# React Task Filter

This is a simple task filter application built with React. The app allows users to filter tasks based on their status (all, completed, active) and displays the list of tasks accordingly.

## Project Structure

```
react-task-filter
├── index.html          # Main HTML document
├── package.json        # npm configuration file
├── vite.config.js      # Vite configuration settings
├── .gitignore          # Files and directories to ignore by Git
├── src
│   ├── main.jsx        # Entry point of the React application
│   ├── App.jsx         # Main App component
│   ├── components
│   │   ├── TaskFilter.jsx  # Component for filtering tasks
│   │   └── TaskList.jsx     # Component for displaying tasks
│   ├── data
│   │   └── tasks.js        # Array of task objects
│   └── index.css          # CSS styles for the application
└── README.md             # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-task-filter
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.

## Features

- Filter tasks by status: all, completed, or active.
- Display a list of tasks with their titles and completion status.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.