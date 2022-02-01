import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodoComponent';
import TodoList from './components/TodoListComponent';

function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: true
    },
  ]);
  return (
    <>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
