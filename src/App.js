import { useEffect, useState } from 'react';
import { getTodo } from './service/todo';
import './App.css';
import AddTodo from './components/AddTodoComponent';
import TodoList from './components/TodoListComponent';

function App() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    getTodo()
  }, [])



  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
