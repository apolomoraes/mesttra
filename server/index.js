const express = require('express');
const { randomUUID } = require('crypto');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const tarefas = [
  {
    id: randomUUID(),
    text: "sasas",
    prazo: "asasas"
  },
  {
    id: randomUUID(),
    text: "sasas",
    prazo: "asasas"
  },
  {
    id: randomUUID(),
    text: "sasas",
    prazo: "asasas"
  }
];

app.get('/tarefas', (req, res) => {
  res.send(tarefas);
})

app.get('/tarefas/:id', (req, res) => {
  const { id } = req.params;
  const result = tarefas.filter((tarefa) => tarefa.id === id);
  res.send(result);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})