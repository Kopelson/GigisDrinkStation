const router = require("express").Router();
const drinkRoutes = require("./drinks");
const inventoryRoutes = require("./inventory");

// Drink routes
router.use("/drinks", drinkRoutes);
router.use("/inventory", inventoryRoutes);

module.exports = router;