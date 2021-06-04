import "./App.css";
import React, { useState } from "react";
import Text from "./component/Text";
function App() {
  const [text, setText] = useState([]);
  const [value, setValue] = useState({ id: Math.random(), message: "" });
  const handleChange = (e) => {
    setValue({ id: Math.random(), message: e.target.value });
  };
  const onAdd = () => {
    setText([...text, value]);
    setValue({ id: Math.random(), message: "" });
  };
  const onDelete = (index) => {
    const array = text.filter((item) => item.id !== index);
    setText(array);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do List</p>
        <div>
          {text.map((item, index) => (
            <Text
              text={item.message}
              key={index}
              onDelete={() => {
                onDelete(item.id);
              }}
            />
          ))}
        </div>
        <input onChange={handleChange} value={value.message} />
        <button style={{ marginTop: 10, fontSize: 18 }} onClick={onAdd}>
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
