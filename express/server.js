const express = require("express");
const sequelize = require("../database")
const userRoute = require("../userRoute")
const cors = require("cors");


sequelize.sync().then(() => {console.log("db is ready!")})

const app = express();

app.use(express.json());
app.use(cors());

userRoute(app)

const port = 5000;

app.get("/", (req, res) => res.send("Serve start"));

app.listen(port, () => console.log("Server iniciado!"));
