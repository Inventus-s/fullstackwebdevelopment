import React, { useState } from 'react';
import './TodoApp.css'

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: task, completed: false }]);
      setTask('');
    }
  };

  const handleRemove = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleStatusChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleInputChange} placeholder="Enter a task" />
        <button type="submit">Add Task</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={`task-name ${task.completed ? 'completed' : ''}`}
              onClick={() => handleStatusChange(task.id)}
            >
              {task.name}
            </span>
            <button className="remove-btn" onClick={() => handleRemove(task.id)}>
              Remove
            </button>
            <button
              className="status-btn"
              onClick={() => handleStatusChange(task.id)}
            >
              Update Status
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
