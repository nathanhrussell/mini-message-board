const express = require("express");
const router = express.Router();

const message = [
    { user: "Alice", text: "Hello World!", date: new Date() },
    { user: "Bob", text: "I love express", date: new Date() }
];

router.get("/", (req, res) => {
    res.render("index", { messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, date: new Date() });
  res.redirect("/");
});

router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  if (!message) return res.status(404).send("Message not found");
  res.render("message", { message });
});

module.exports = router;