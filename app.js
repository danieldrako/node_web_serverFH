const express = require('express');
const app = express();
const port = 8080;

// mservir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Home page');
})

app.get('*', (req,res) => {
  res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})