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
    <div className='grid grid-cols-12 py-2'>
      <input type="checkbox" checked={task.completed} onChange={() => onToggleCompleted(task.id)} className='cursor-pointer w-4 h-4 self-center' />

      {isEditing ? (
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}} className='col-span-9 col-start-2'>
          {task.name}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSaveEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => onDelete(task.id)} className='col-start-11 col-span-2 bg-sky-500 hover:bg-sky-400 p-1 rounded-2xl text-white text-sm cursor-pointer'>Delete</button>
    </div>
  );
};

export default Task;
