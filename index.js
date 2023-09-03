const express = require('express');
const app = express();
const port = 3000;
let tarefas = [];
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const tarefaExiste = (tarefa) => {
  return tarefas.indexOf(tarefa) > -1;
}

const addTarefa = (tarefa) => {
  if (!tarefaExiste(tarefa)) {
    tarefas.push(tarefa)
  }
}

app.get('/', (req, res) => {
  res.render(__dirname+ '/public/index.ejs', { tarefas }); 
});

app.post('/', (req, res) => {
  
  if (req.body.content) {
    addTarefa(req.body.content);
  }
  res.redirect('/')
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = {addTarefa, tarefaExiste};