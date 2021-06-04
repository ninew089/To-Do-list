import "./App.css";
import React, { useState } from "react";
import Text from "./component/Text";
function App() {
  const [text, setText] = useState([]);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const onAdd = () => {
    setText([...text, value]);
  };
  const onDelete = (index) => {
    const array = text.filter((x, i) => i !== index);

    setText(array);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do List</p>
        <div>
          {text.map((item, index) => (
            <Text
              text={item}
              key={index}
              onDelete={() => {
                onDelete(index);
              }}
            />
          ))}
        </div>
        <input onChange={handleChange} value={value} />
        <button style={{ marginTop: 10, fontSize: 18 }} onClick={onAdd}>
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
