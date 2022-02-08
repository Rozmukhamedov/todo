import "./todolist.css";

const TodoList = ({ todo, setTodo }) => {
  function deleteTodo(id) {
    const newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }

  function statusTodo(id) {
    const newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(newTodo);
  }

  return (
    <div className="todolist">
      <h4>Todo</h4>
      {todo.map((item, id) => (
        <div key={id} className="flex">
          <div>{item.id}.</div>
          <div className={item.completed ? `false` : `true`}>{item.title}</div>
          <button onClick={() => statusTodo(item.id)}>Status</button>
          <button onClick={() => deleteTodo(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
