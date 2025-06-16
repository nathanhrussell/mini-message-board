const express = require("express");
const app = express();
const indexRouter = require("./routes/index")

app.set("view engine", "ejs");
app.use(express.urlencoded ({ extended: true }));
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
