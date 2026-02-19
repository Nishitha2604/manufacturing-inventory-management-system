import React, { useState } from "react";
import api from "../api";

function AddItem() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await api.post("/inventory", form);
    window.location.reload();
  };

  return (
    <div>
      <input placeholder="Item Name"
        onChange={e => setForm({ ...form, item_name: e.target.value })} />
      <input placeholder="Category"
        onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="number" placeholder="Reorder Level"
        onChange={e => setForm({ ...form, reorder_level: e.target.value })} />
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default AddItem;
