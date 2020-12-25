// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const generatePassword = require('./generate_password.js')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// use body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const passwords = generatePassword(options)
  res.render('index', { password: passwords , options: options })
})

// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
