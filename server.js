const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");
const connectToDb = require("./db/connectionDB");

connectToDb();

app.use(express.json());
app.use(cors());

routes(app);

app.get("/test", (req, res) => {
  res.json("TEST: server is working");
});


const path = require("path");
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "view/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname + "/view/build/index.html"));
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));

module.exports = app;
