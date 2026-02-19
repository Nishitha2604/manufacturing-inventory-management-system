import React, { useEffect, useState } from "react";
import api from "../api";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    inStock: 0,
    lowStock: 0,
    outOfStock: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await api.get("/inventory");
    const data = res.data;
    setItems(data);

    // Calculate statistics
    const total = data.length;
    const inStock = data.filter(i => i.status === "IN_STOCK").length;
    const lowStock = data.filter(i => i.status === "LOW_STOCK").length;
    const outOfStock = data.filter(i => i.status === "OUT_OF_STOCK").length;

    setStats({ total, inStock, lowStock, outOfStock });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={cardStyle}>
          <h3>Total Items</h3>
          <p>{stats.total}</p>
        </div>

        <div style={cardStyle}>
          <h3>In Stock</h3>
          <p>{stats.inStock}</p>
        </div>

        <div style={cardStyle}>
          <h3>Low Stock</h3>
          <p>{stats.lowStock}</p>
        </div>

        <div style={cardStyle}>
          <h3>Out of Stock</h3>
          <p>{stats.outOfStock}</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  width: "150px",
  textAlign: "center",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9"
};

export default Dashboard;
