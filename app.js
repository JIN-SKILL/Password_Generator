// require related modules used in the project
const express = require('express')
const app = express()
const port = 3000
// const exphbs = require('express-handlebars')


// route
app.get('/', (req, res) => {
  res.send(`This will be a random password generator`)
  // res.render('index')
})


// listen
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})
