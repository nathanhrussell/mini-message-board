const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY timestamp DESC");
    return rows
}

async function insertMessage(title, text) {
    await pool.query("INSERT INTO messages (title, text) VALUES ($1, $2)", [title, text]);
}

module.exports = {
    getAllMessages,
    insertMessage
};