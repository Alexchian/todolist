import React from 'react';

function TodoItem({ task, tasks, setTasks }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedText, setEditedText] = React.useState(task.text);

  const toggleTask = () => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = () => {
    if (window.confirm('Are you sure delete?')) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, text: editedText } : t));
    setIsEditing(false);
  };

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', background: '#FFFFFF', padding: '10px', borderRadius: '15px' }}>
      <input type="checkbox" checked={task.completed} onChange={toggleTask} />
      {isEditing ? (
        <>
          <input
            className='editList'
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <span>{task.date}</span>
          <div className="wrapBtn">
            <button className='trash' onClick={deleteTask}>🗑️</button>
            <button onClick={startEditing}>✏️</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;