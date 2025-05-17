import React, { useState } from 'react';
import './App.css';

function TodoInput({ tasks, setTasks }) {
  const [input, setInput] = React.useState('');

  const handleAddTask = (e) => {
    setInput(e.target.value); // Update input state on change
  };

  const handleOnEnter = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false, date: new Date().toLocaleString() }]);
      setInput(''); // Clear input after adding
    }
  };

  return (
    <div>
      <input
        className='addTask'
        type="text"
        value={input}
        onChange={handleAddTask} // Update state on every keystroke
        onKeyDown={handleOnEnter} // Add task on Enter
        placeholder="Add Task"
      />
      <button onClick={() => {
        if (input.trim()) {
          setTasks([...tasks, { id: Date.now(), text: input, completed: false, date: new Date().toLocaleString() }]);
          setInput('');
        }
      }}>Add Task</button>
    </div>
  );
}

export default TodoInput;