module.exports = {
  getPlayers: (req, res) => {
    const { sequelize } = req.app.get("db");
  },
};
