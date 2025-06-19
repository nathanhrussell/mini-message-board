const express = require("express");
const router = express.Router();
const db = require("../db/queries");

router.get("/", async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", async (req, res) => {
  const { username, text } = req.body;
  await db.insertMessage(username, text);
  res.redirect("/");
});

router.get("/message/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const message = await db.getMessageById(id);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { message });
});


module.exports = router;