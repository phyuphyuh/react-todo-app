import React, { useState} from 'react';

const AddTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAddTask(taskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-100 p-1 rounded-lg shadow-md mb-4 flex divide-x divide-blue-200'>
      <input
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Enter a new task'
        className='p-2 w-64 flex-1'
      />
      <button
        type='submit'
        disabled={!taskName.trim()}
        className={`w-32 flex-none ${
          !taskName.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-sky-500"
        }`}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
