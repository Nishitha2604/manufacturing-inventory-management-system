import React, { useEffect, useState } from "react";
import api from "../api";

function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/inventory").then(res => setItems(res.data));
  }, []);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {items.map(i => (
          <tr key={i._id}>
            <td>{i.item_name}</td>
            <td>{i.category}</td>
            <td>{i.quantity_in_stock}</td>
            <td>{i.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryList;
