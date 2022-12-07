//IMPORTS
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4567"],
    credentials: true,
  })
);

//CONNECTION TO SERVER, DATABASE AND USER SESSION
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 60 * 7,
      sameSite: "none",
      secure: true,
    },
  })
);

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

  app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    // const existingUser = await sequelize.query(
    //   `SELECT * FROM users WHERE username = '${username}'`
    // );
    // if (existingUser[0]) {
    //   return res.status(409).send("username is already taken");
    // } else {
    const newUser = await sequelize.query(
      `INSERT INTO users (username, password)
      VALUES ('${username}', '${password}');`
    );
    req.session.user = {
      id: newUser[0].id,
      username: newUser[0].username,
    };
    res.status(200).send(req.session.user);
    // }
  });

  //User login
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await sequelize.query(
      `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
    );
    if (!user) {
      return res.status(400).send("user does not exist");
    } else {
      const authenticated = user;
      if (authenticated) {
        req.session.user = {
          id: user[0].id,
          username: user[0].username,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("username or password is incorrect");
      }
    }
  });

  //USER LOGOUT

  app.delete("/logout", (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  });

  // get all players
  app.get("/players", async (req, res) => {
    const allPlayers = await sequelize.query(`SELECT * FROM players;`);
    res.status(200).send(allPlayers[0]);
  });

  // APP LISTEN
  app.listen(SERVER_PORT, () =>
    console.log(`Server is listening on ${SERVER_PORT}`)
  );
});
