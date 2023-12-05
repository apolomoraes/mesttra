const { Router } = require("express");
const { Sequelize } = require("sequelize");
const config = require("../sequelizeConfig");
const { randomUUID } = require("crypto");

const router = Router();
const sequelize = new Sequelize(config.development);

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

router.get('/', async (req, res) => {
  await sequelize.sync({ force: true });
  const tasks = await Task.findAll();
  res.send(tasks);
})

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const task = await Task.findByPk(id);
  res.send(task);
})

router.post('/add', async (req, res) => {
  const task = req.body;

  const newTask = {
    id: randomUUID(),
    ...task
  }

  const response = await Task.create(newTask);
  res.send(response);
})

router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;

  const result = await Task.update(updatedTask, {
    where: {
      id,
    },
    returning: true,
  });

  res.send(result);
})

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Task.destroy({
    where: {
      id
    },
  });

  res.status(200).json({
    data: response,
  });
})

modules.exports = router;