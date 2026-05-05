# React Task Filter Application

This is a simple task filter application built with React. It allows users to view and filter tasks based on their completion status.

## Project Structure

```
react-task-filter
├── index.html          # Main HTML document
├── package.json        # npm configuration file
├── vite.config.js      # Vite configuration settings
├── .gitignore          # Git ignore file
├── src
│   ├── main.jsx        # Entry point of the React application
│   ├── App.jsx         # Main App component
│   ├── components
│   │   ├── TaskList.jsx # Component to display the list of tasks
│   │   └── TaskFilter.jsx # Component to filter tasks
│   ├── styles
│   │   └── main.css     # CSS styles for the application
│   └── data
│       └── tasks.js     # Sample task data
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-task-filter
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- View a list of tasks
- Filter tasks by their completion status (completed or pending)

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.