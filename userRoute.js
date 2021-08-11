const User = require("./user");

const userRoute = (app) => {
  app.get("/users", async (req, res) => {

    const users = await User.findAll();

    res.send(users);
  });
  app.get('/users/:name', async (req, res) => {

    const requestedname = req.params.name;
    const user = await User.findAll({where: { name: requestedname }});
     res.send(user);
  })
  app.post("/users", async (req, res) => {
    await User.create(req.body);
    res.send(req.body);
  });
  app.delete("/users/:id?", (req, res) => {
    User.destroy({ where: { id: id } });

    res.status(201);
  });
};

module.exports = userRoute;
