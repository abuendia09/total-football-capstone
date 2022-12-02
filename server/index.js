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
      sameSite: "lax",
      secure: false,
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
    const newUser = await sequelize.query(
      `INSERT INTO users (username, password)
      VALUES ('${username}', '${password}');`
    );
    req.session.user = {
      id: newUser[0].id,
      username: newUser[0].username,
    };
    res.status(200).send(req.session.user);
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

  // get all players
  app.get("/players", async (req, res) => {
    const allPlayers = await sequelize.query("SELECT * FROM players;");
    res.status(200).send(allPlayers[0]);
  });

  // get a player for the team
  app.get("/create", async (req, res) => {
    const { position } = req.body;

    const onePlayer = await sequelize.query(
      `SELECT * FROM players WHERE player_position = '${position}'`
    );
    res.status(200).send(onePlayer);
  });

  // APP LISTEN
  app.listen(SERVER_PORT, () =>
    console.log(`Server is listening on ${SERVER_PORT}`)
  );
});
