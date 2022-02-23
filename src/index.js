const db = require('./models');
const express = require('express');

function getTasksPromise() {
  db.User.findAll()
    .then((users) => {
      console.log('USER', users);
      users.forEach((user) => {
        console.log('NAME: ', user.firstName);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// const users = getTasksPromise();

const app = express();

// Asignamos puerto de variable de entorno, si no existe ponemos 3000
const port = process.env.PORT || 3005;

app.get('/', function (req, res) {
  res.send('Hello World!!! v.3')
})
// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
