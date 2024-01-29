import { Router } from "express";
import getUsers from "../services/users/getUsers.js";
import authMiddleware from "../middleware/auth.js";

const users = Router();

users.get("/", async (req, res, next) => {
  try {
    const { username, email } = req.query;
    const users = await getUsers(username, email);

    res.json(users);
  } catch (error) {
    next(error);
  }
});

users.get("/:id", (req, res) => {
  try {
    const { id } = req.params;

    const user = {
      id: 1,
      username: "oozer",
      password: "00z3r",
      name: "Oozy Oozborn",
      image: "http://blabla.bla/pic/1",
    };

    if (user && id == 1) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: `User id ${id} not found` });
    }
  } catch (error) {
    next(error);
  }
});

// users.post("/", (req, res) => {
users.post("/", authMiddleware, async (req, res, next) => {
  const { username, password, name, image } = req.body;

  //call domain and receive user
  const user = {
    id: Math.random(),
    username: username,
    password: password,
    name: name,
    image: image,
  };
  res.status(201).send(user);
});

users.put("/:id", (req, res) => {
  const { id } = req.params;
  const { username, password, name, image } = req.body;
  const user = {
    id: Math.random(),
    username: username,
    password: password,
    name: name,
    image: image,
  };
  if (user && id == 1) {
    res.status(200).send({ message: `User id ${id} updated`, user });
  } else {
    res.status(404).json({ message: `User id ${id} not found` });
  }
});

users.delete("/:id", (req, res) => {
  const { id } = req.params;

  //tmp
  const { username, password, name, image } = req.body;
  const user = {
    id: Math.random(),
    username: username,
    password: password,
    name: name,
    image: image,
  };

  if (user && id == 1) {
    res.status(200).send({ message: `User id ${id} deleted`, user });
  } else {
    res.status(404).json({ message: `User id ${id} not found` });
  }
});

export default users;
