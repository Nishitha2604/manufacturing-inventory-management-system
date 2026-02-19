const express = require("express");
const router = express.Router();
const controller = require("../controllers/inventoryController");

router.post("/", controller.createItem);
router.get("/", controller.getItems);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);
router.patch("/:id/add", controller.addStock);
router.patch("/:id/remove", controller.removeStock);

module.exports = router;
