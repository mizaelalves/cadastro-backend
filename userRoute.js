const User = require("./User");

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
  app.delete("/users/:id", async(req, res) => {
    const requestedId = req.params.id;
    await User.destroy({where: { id: requestedId }})

    res.send('removed');
  });
};

module.exports = userRoute;
