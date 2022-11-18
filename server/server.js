require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const Sequelize = require("sequelize");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

//Middleware
app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// sequelize.authenticate().then(() => {
//   app.post("/auth/register", async (req, res) => {
//     const { username, password } = req.body;

//     const existingUser = await sequelize.query(
//       `SELECT * FROM users
//       WHERE username = $1;`
//     );
//     if (existingUser[0]) {
//       return res.status(409).send("Username is already taken");
//     }
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);

//     const newUser = await sequelize.query(
//       `INSERT INTO users(username,password)
//         VALUES($1,$2);
//     `
//     );
//   });
// });

// APP LISTEN
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on ${SERVER_PORT}`)
);
