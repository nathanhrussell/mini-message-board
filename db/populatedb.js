const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
text TEXT,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES
('Alice', 'Welcome to the board!'),
('Bob', 'Nice to meet you all!');
`;

async function main() {
    const connectionString = process.argv[2];

    if (!connectionString) {
        console.error("Usage: node db/populatedb.js <connection-string>");
        process.exit(1);
    }

    const client = new Client({ connectionString });

    try {
        console.log("Connecting to DB...");
        await client.connect();
        console.log("Seeding...")
        await client.query(SQL);
        console.log("Done!");
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client/end();
    }
}

main();