import React, { useState} from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Filter from './Filter';
import '../src/output.css';
// import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Learn React', completed: false},
    { id: 2, name: 'Build a React app', completed: false },
  ]);

  const [filter, setFilter] = useState('all');

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !==taskId));
  };

  const handleToggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed} : task
      )
    );
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleAddTask = (taskName) => {
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className='container max-w-lg mx-auto my-8 p-5 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-sky-500 mb-4'>To-Do List</h1>
      <AddTask onAddTask={handleAddTask} />
      <Filter onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} onToggleCompleted={handleToggleCompleted} />
    </div>
  );
};

export default App;
