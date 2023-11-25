// Importamos los models necesarios
const logrosModel = require("../models/logrosModel");

const getUsers = async (req, res) => {
  const users = await logrosModel.getUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await logrosModel.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

const createUser = async (req, res) => {
  const createdUser = await logrosModel.createUser(req.body);
  if (createdUser) {
    res.json(createdUser);
  } else {
    res.status(500).json({ message: "Se rompió el servidor" });
  }
};

const updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await logrosModel.getUserById(id);
  if (user) {
    const updatedUser = await logrosModel.updateUser(parseInt(req.params.id), {
      ...user,
      ...req.body,
    });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(500).json({ message: "Se rompió el servidor" });
    }
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await logrosModel.getUserById(id);
  if (user) {
    const result = await logrosModel.deleteUser(parseInt(req.params.id));

    if (result) {
      res.json(user);
    } else {
      res.status(500).json({ message: "Se rompió el servidor" });
    }
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
