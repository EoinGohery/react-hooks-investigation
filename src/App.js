import logo from './logo.svg';
import './App.css';
import { useCallback, useState } from 'react';
import TodoList from './TodoListComponent';
import {Calculator} from './Calculator';

function App() {

  const [todos, setTodos] = useState(["get milk", "buy petrol"]);

  const [count, setCount] = useState(0);

  // const onAddTodo = (e) => {
  //   setTodos([...todos, "New Todo"])
  // }

  const onAddTodo = useCallback(()=> {
    setTodos(...todos, "New todos")
  }, [todos]);

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className="App">

      <input value={a} onChange={(e)=>setA(parseInt(e.target.value))}/>
      <input value={b} onChange={(e)=>setB(parseInt(e.target.value))}/>

      <Calculator a={a} b ={b}/>
      <hr/>

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <TodoList todos={todos} onAddClick={onAddTodo}/>
    </div>
  );
}

export default App;
