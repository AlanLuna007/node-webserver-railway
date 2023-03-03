// import * as http from 'http';
require('dotenv').config();
const express = require('express')
var hbs = require('hbs');
const app = express()
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
// servir contenido estatico
app.use( express.static('public') );

// app.get('/', (req, res) => {
//   res.send('Home page')
// })
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Alan',
    titulo: 'Curso de node',
  });
})

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Alan',
        titulo: 'Curso de node',
      });
})
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Alan',
        titulo: 'Curso de node',
      });
})
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
// app.listen(8080)