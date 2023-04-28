import { useState } from 'react';
import './App.css'


function App() {
  const [items, setItems] = useState (["Item 1", "Item 2", "Item 3"]);

  const handleAddItemClick = () => {
    const newItemName = `Item ${items.length + 1}`;
    setItems([...items, newItemName]);
  };

  const handleDeleteItemClick = () => {
  setItems(items.slice(0, items.length - 1))
  };

  return (
    <div>
      <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
      <button onClick={handleAddItemClick}>Add Item</button>
      <button onClick={handleDeleteItemClick}>Delete Item</button>
    </div>
  );
      
}

export default App;
