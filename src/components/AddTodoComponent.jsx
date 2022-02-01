import { useState } from "react";
import "./todolist.css";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState("");
  const [todoId, setTodoId] = useState(3);

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: 1 + todoId,
        title: value,
        status: true,
      },
    ]);
    setTodoId(1 + todoId);
    setValue("");
  }
  return (
    <div className="todolist">
      <div className="flex">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={saveTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default AddTodo;
