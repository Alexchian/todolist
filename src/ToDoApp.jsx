import { useState, useEffect } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

function ToDoApp() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteSelected = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <button className='deleteSel' onClick={deleteSelected}>Delete Selected</button>
    </div>
  );
}

export default ToDoApp;
