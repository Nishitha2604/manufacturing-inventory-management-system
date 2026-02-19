import React from "react";
import InventoryList from "./components/InventoryList";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div>
      <h1>Inventory Management</h1>
      <AddItem />
      <InventoryList />
    </div>
  );
}

export default App;
