const express = require("express");
const logrosRouter = express.Router();
// Importamos los controllers necesarios
const logrosController = require("../controllers/logrosController");

logrosRouter.get("/", logrosController.getUsers);

logrosRouter.get("/:id", logrosController.getUserById);

logrosRouter.post("/", logrosController.createUser);

logrosRouter.put("/:id", logrosController.updateUser);

logrosRouter.delete("/:id", logrosController.deleteUser);

module.exports = logrosRouter;
