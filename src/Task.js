import React from 'react';

const Task = ({ task, onDelete, onToggleCompleted }) => {
  return (
    <div className='grid grid-cols-6 py-2'>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleCompleted(task.id)} className='col-span-1' />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}} className='col-span-4 col-start-2'>
        {task.name}
      </span>
      <button onClick={() => onDelete(task.id)} className='col-start-6 col-span-1 bg-sky-500 hover:bg-sky-200 p-1 rounded-2xl text-white text-sm'>Delete</button>
    </div>
  );
};

export default Task;
