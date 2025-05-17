import TodoItem from './TodoItem';

function TodoList({ tasks, setTasks }) {
  return (
    <ul className='todoList'>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
}

export default TodoList;