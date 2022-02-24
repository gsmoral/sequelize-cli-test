const express = require('express');
const db = require('./models');

function getTasksPromise() {
  return db.User.findAll();
  // db.User.findAll()
  //   .then((users) => {
  //     console.log('USER', users);
  //     users.forEach((user) => {
  //       console.log('NAME: ', user.firstName);
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

// const users = getTasksPromise();

const app = express();

// Asignamos puerto de variable de entorno, si no existe ponemos 3000
const port = process.env.PORT || 3005;

app.get('/', async (req, res) => {
  // function getTasksPromise() {
  //   return db.User.findAll();
  // }
  getUsers = async () => {
    const users = await db.User.findAll();
    return users;
  }
  // const result = 
  const users = await getUsers();
  // console.log(users)
  const result = {
    env: process.env.NODE_ENV || 'default',
    users
  }
  res.status(200).send(result)
})
// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
