//IMPORTS
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { Sequelize } = require("sequelize");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//CONNECTION TO SERVER, DATABASE AND USER SESSION
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    resave: false,
    saveUninitialized: true,
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
  //register a user
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
      `SELECT * FROM users WHERE username = '${username}'`
    );
    console.log(user[0][0]);
    if (!user[0][0]) {
      return res.status(400).send("user does not exist");
    } else {
      if (user[0][0].password == password) {
        req.session.user = {
          id: user[0][0].id,
          username: user[0][0].username,
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("password is incorrect");
      }
    }
  });

  //USER LOGOUT

  app.delete("/logout", (req, res) => {
    req.session.destroy();
    res.status(200).send("user is logged out");
  });

  // get players
  app.get("/players", async (req, res) => {
    const allPlayers = await sequelize.query(`SELECT * FROM players;`);
    res.status(200).send(allPlayers[0]);
  });
  app.get("/goalkeeper", async (req, res) => {
    const goalkeeper = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'GK';`
    );
    res.status(200).send(goalkeeper[0]);
    console.log(goalkeeper[0]);
  });
  app.get("/rightback", async (req, res) => {
    const rightback = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'RB';`
    );
    res.status(200).send(rightback[0]);
    console.log(rightback[0]);
  });
  app.get("/leftback", async (req, res) => {
    const leftback = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'LB';`
    );
    res.status(200).send(leftback[0]);
    console.log(leftback[0]);
  });
  app.get("/leftcb", async (req, res) => {
    const leftCb = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'LCB';`
    );
    res.status(200).send(leftCb[0]);
    console.log(leftCb[0]);
  });
  app.get("/rightcb", async (req, res) => {
    const rightCb = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'RCB';`
    );
    res.status(200).send(rightCb[0]);
    console.log(rightCb[0]);
  });
  app.get("/leftcm", async (req, res) => {
    const leftCm = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'LCM';`
    );
    res.status(200).send(leftCm[0]);
    console.log(leftCm[0]);
  });
  app.get("/rightcm", async (req, res) => {
    const rightCm = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'RCM';`
    );
    res.status(200).send(rightCm[0]);
    console.log(rightCm[0]);
  });
  app.get("/cam", async (req, res) => {
    const cam = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'CAM';`
    );
    res.status(200).send(cam[0]);
    console.log(cam[0]);
  });
  app.get("/leftwing", async (req, res) => {
    const leftWing = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'LW';`
    );
    res.status(200).send(leftWing[0]);
    console.log(leftWing[0]);
  });
  app.get("/rightwing", async (req, res) => {
    const rightWing = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'RW';`
    );
    res.status(200).send(rightWing[0]);
    console.log(rightWing[0]);
  });
  app.get("/striker", async (req, res) => {
    const striker = await sequelize.query(
      `SELECT first_name FROM players WHERE player_position = 'ST';`
    );
    res.status(200).send(striker[0]);
    console.log(striker[0]);
  });
  // post the team
  app.post("/create", async (req, res) => {
    const { teamName } = req.body;
    const newTeam = await sequelize.query(
      `INSERT INTO teams (team_name) VALUES ('${teamName}')`
    );
    res.status(200).send(newTeam[0]);
  });
  // get team
  app.get("/teams", async (req, res) => {
    const allTeams = await sequelize.query(`SELECT * FROM teams;`);
    res.status(200).send(allTeams[0]);
  });
  // APP LISTEN
  app.listen(SERVER_PORT, () =>
    console.log(`Server is listening on ${SERVER_PORT}`)
  );
});
