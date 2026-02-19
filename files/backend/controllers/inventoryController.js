const Inventory = require("../models/Inventory");

// Helper to update status
const updateStatus = (item) => {
  if (item.quantity_in_stock === 0) return "OUT_OF_STOCK";
  if (item.quantity_in_stock <= item.reorder_level) return "LOW_STOCK";
  return "IN_STOCK";
};

// Create Item
exports.createItem = async (req, res) => {
  const item = new Inventory(req.body);
  item.status = updateStatus(item);
  await item.save();
  res.json(item);
};

// Get All Items
exports.getItems = async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
};

// Update Item
exports.updateItem = async (req, res) => {
  const item = await Inventory.findById(req.params.id);
  Object.assign(item, req.body);
  item.status = updateStatus(item);
  item.last_updated = Date.now();
  await item.save();
  res.json(item);
};

// Delete Item
exports.deleteItem = async (req, res) => {
  await Inventory.findByIdAndDelete(req.params.id);
  res.json({ message: "Item deleted" });
};

// Add Stock
exports.addStock = async (req, res) => {
  const item = await Inventory.findById(req.params.id);
  item.quantity_in_stock += req.body.quantity;
  item.status = updateStatus(item);
  await item.save();
  res.json(item);
};

// Remove Stock
exports.removeStock = async (req, res) => {
  const item = await Inventory.findById(req.params.id);

  if (item.quantity_in_stock < req.body.quantity)
    return res.status(400).json({ message: "Insufficient stock" });

  item.quantity_in_stock -= req.body.quantity;
  item.status = updateStatus(item);
  await item.save();
  res.json(item);
};
