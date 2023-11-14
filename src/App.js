import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (newItem === "") {
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 100),
      value: newItem,
      backgroundColor: items.length % 2 === 0 ? "#C48bea" : "#Da652f", // Use different colors for even and odd items
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="all">
      <div className="Title">Alans To do List</div>
      <div className="inputContainer">
        <input
          className="inputBox"
          type="text"
          placeholder="Enter an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="addButton" onClick={() => addItem()}>
          Add
        </button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li
            className="list-item"
            key={item.id}
            style={{ backgroundColor: item.backgroundColor }}
          >
            {item.value}{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
