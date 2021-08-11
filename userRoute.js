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
  app.put("/users/:id?", async (req, res) => {
    const { id, name, age, cpf, date } = req.body;

    const userIndex = await User.findByPk((User) => User.id === id);

    if (userIndex < undefined) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = { name, age, cpf, date };

    users[userIndex] = user;

    const save = await user.save();
    console.log(save);
    return res.json(user);
  });
  app.delete("/users/:id?", (req, res) => {
    User.destroy({ where: { id: id } });

    res.status(201);
  });
};

module.exports = userRoute;
