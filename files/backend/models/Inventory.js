const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  item_name: { type: String, required: true },
  category: { type: String, required: true },
  quantity_in_stock: { type: Number, default: 0 },
  reorder_level: { type: Number, required: true },
  supplier: { type: String },
  status: { type: String, default: "IN_STOCK" },
  last_updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Inventory", inventorySchema);
