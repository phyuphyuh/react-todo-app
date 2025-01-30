import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleCompleted }) => {
  return (
    <ul className='divide-y divide-gray-200'>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onDelete={onDelete} onToggleCompleted={onToggleCompleted} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
