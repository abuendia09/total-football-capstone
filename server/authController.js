const bcrypt = require("bcrypt");

module.exports = {
  //REGISTER THE USER HERE-BACKEND
  register: async (req, res) => {
    const { sequelize } = req.app.get("db");
    const { username, password } = req.body;

    const existingUser = await sequelize.check_user_for_login(username);
    if (existingUser[0]) {
      return res.status(409).send("Username is already taken");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await sequelize.register_user([username, hash]);
    delete newUser[0].password;

    req.session.user = {
      userId: newUser[0].id,
      username: newUser[0].username,
    };
    res.status(200).send(req.session.user);
  },
};
