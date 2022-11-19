//IMPORTS
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const authCtrl = require("./authController");

const app = express();

const { PORT, CONNECTION_STRING } = process.env;

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

sequelize.authenticate().then(() => {
  app.set("db", {
    sequelize,
  });

  //ENDPOINTS
  //Auth:
  app.post("auth/register", authCtrl.register);

  // APP LISTEN
  app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
});
