import React, { useState } from 'react';
import './App.css';

function TodoInput({ tasks, setTasks }) {
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false, date: new Date().toLocaleString() }]);
      setInput('');
    }
  };

  return (
    <div>
      <input className='addTask' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add Task" />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TodoInput;