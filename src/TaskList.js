import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleCompleted, onEditTask }) => {
  return (
    <ul className='divide-y divide-gray-200'>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDelete={onDelete}
            onToggleCompleted={onToggleCompleted}
            onEditTask={onEditTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
