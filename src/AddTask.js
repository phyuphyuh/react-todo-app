import React, { useState} from 'react';

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-100 p-3 rounded-lg shadow-md mb-4 flex divide-x divide-blue-200'>
      <input type='text' value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='Enter a new task' className='w-64 flex-1' />
      <button type='submit' className='w-32 flex-none'>Add Task</button>
    </form>
  );
};

export default AddTask;
