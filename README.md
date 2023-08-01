# Task Management System

This is a simple task management system that allows users to create, complete, and delete tasks. Users can also join groups and share tasks with other users in the same group.

## Getting Started

To get started with the project, follow the instructions below:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14.x.x or higher)
- npm (v6.x.x or higher)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/task-management-system.git
```

2. Navigate to the project directory:

```bash
cd task-management-system
```

3. Install the project dependencies:

```bash
npm install
```

### Usage

1. Run the development server:

```bash
npm start
```

2. Open your web browser and go to `http://localhost:3000` to access the application.

### Login Credentials

To access the task management system, use the following login credentials:

- Username: user
- Password: password

### Dependencies

The project uses the following dependencies:

- React (v17.x.x) - JavaScript library for building user interfaces.
- styled-components (v5.x.x) - CSS-in-JS library for styling components.
- react-spring (v9.x.x) - Animation library for React.
- react-toastify (v8.x.x) - Notification library for React.

## Features

- User login with username and password.
- User can join different groups.
- Each group has its own set of tasks.
- Users can add, complete, and delete tasks in their respective groups.
- Real-time updates for task changes within a group.

## API Integration

The application is integrated with a mock API that simulates data sharing between users in the same group. The API is implemented using JavaScript's `Promise` to mimic asynchronous behavior. The API functions can be found in the `MockApi/MockApi.js` file.

## Future Improvements

- Implement user registration functionality.
- Add user authentication and authorization with a backend server.
- Replace the mock API with a real backend API for data storage.
- Enhance the UI with more styling and animations.
