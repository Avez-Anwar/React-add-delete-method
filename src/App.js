import React, { useState } from "react";

function App() {
  const [text, setText] = useState(" ");
  const [item, setItem] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([text, ...item]);
    setText("");
  };

  const deleteTodo = (name, i) => {
    const todos = item.slice();
    todos.splice(i, 1);
    setItem(todos);
  };

  console.log(item);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <input value={text} onChange={handleChange} type="text" />
        <button>Add</button>
      </form>
      <Todo item={item} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

function Todo(props) {
  return (
    <div>
      {props.item.map((items, i) => {
        return (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => props.deleteTodo(items, i)}
            key={i}>
            {items}
          </li>
        );
      })}
    </div>
  );
}
