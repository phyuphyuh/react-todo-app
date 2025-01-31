import React, { useEffect, useState } from 'react';

const Task = ({ task, onDelete, onToggleCompleted, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    setNewName(task.name);
  }, [task]);

  const handleSaveEdit = () => {
    onEditTask(task.id, newName);
    setIsEditing(false);
  };

  return (
    <div className='grid grid-cols-12 py-3 content-center'>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleCompleted(task.id)} className='cursor-pointer w-4 h-4 self-center justify-self-center' />

      {isEditing ? (
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} autoFocus className='col-span-7 col-start-2 pl-1' />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}} className='col-span-8 col-start-2 pl-1'>
          {task.name}
        </span>
      )}

      <div className='col-start-10 col-span-3 flex justify-between'>

      {isEditing ? (
        <button onClick={handleSaveEdit} className='flex-1 bg-sky-500 hover:bg-sky-400 mx-1 px-2 rounded-xl text-white text-xs cursor-pointer'>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className='flex-1 bg-sky-500 hover:bg-sky-400 mx-1 px-2 rounded-xl text-white text-xs cursor-pointer'>Edit</button>
      )}

      <button
        onClick={() => onDelete(task.id)}
        className='flex-1 bg-sky-500 hover:bg-sky-400 mx-1 px-2 rounded-xl text-white text-xs cursor-pointer'
      >
        Delete
      </button>

      </div>
    </div>
  );
};

export default Task;
