import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const generateId = () => '_' + Math.random().toString(36).substr(2, 9);



function Todo () {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => todos.concat({
      text: input,
      id: generateId()
    }))

    setInput("");
  }

  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id))

  return (
    <div>
      <input type="text" 
      value={input} 
      placeholder="add to do " 
      onChange={(e) => setInput(e.target.value)}/>
    <button onClick={handleSubmit}>+</button>

      <ul>
        {todos.map(({text, id}) => (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => removeTodo(id)}>-</button>
          </li>
        ))} 
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Todo />, rootElement);
