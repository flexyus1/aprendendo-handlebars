const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req,res) => {
  res.render('dashboard')
})

app.get('/', (req, res) => {
  
  const user = {
    name: "leozinho",
    surname: "lindo",
    age:21
  }

  const teste = "Teste de palavras"

  const auth = true

  const aproved = true

  res.render('home', { user: user, teste, auth, aproved })
})

app.listen(3000, () =>{
  console.log('Porta funcionando')
})
