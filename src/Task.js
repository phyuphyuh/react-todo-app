import React from 'react';

const Task = ({ task, onDelete, onToggleCompleted }) => {
  return (
    <div className='grid grid-cols-12 py-2'>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleCompleted(task.id)} className='cursor-pointer w-4 h-4 self-center' />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}} className='col-span-9 col-start-2'>
        {task.name}
      </span>
      <button onClick={() => onDelete(task.id)} className='col-start-11 col-span-2 bg-sky-500 hover:bg-sky-400 p-1 rounded-2xl text-white text-sm cursor-pointer'>Delete</button>
    </div>
  );
};

export default Task;
