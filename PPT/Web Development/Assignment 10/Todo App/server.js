const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

app.get('/', (req, res) => {
  res.json(todos);
});

app.post('/add', (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.status(400).json({ error: 'Validation failed. Task is required.' });
  } else {
    const newTodo = { id: todos.length + 1, task };
    todos.push(newTodo);
    res.status(201).json({ message: 'Todo created successfully.', data: todos });
  }
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find((todo) => todo.id === parseInt(id));
  if (!todo) {
    res.status(404).json({ error: 'Todo not found.' });
  } else {
    todo.task = task;
    res.json({ message: 'Todo updated successfully.', data: todos });
  }
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === parseInt(id));
  if (index === -1) {
    res.status(404).json({ error: 'Todo not found.' });
  } else {
    todos.splice(index, 1);
    res.json({ message: 'Todo deleted successfully.', data: todos });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
