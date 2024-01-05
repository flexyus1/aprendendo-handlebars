//Estrutura básica para rodar um server localhost com node e usar as handlebars
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
  partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))
//----------------------------------------------------------------------------------

app.get('/dashboard', (req,res) => {
  const items = ['item a', 'item b', 'item c']

  res.render('dashboard',{items})
})

app.get('/post', (req, res) => {
  const post = {
    title: 'Alguma coisa',
    category: 'Javascript',
    body: 'Aprendendo js',
    comments: 4
  }

  res.render('blogpost', {post})
})

app.get('/blog', (req,res) => {
  const posts = [
    {
      title:'aprendendo node',
      category:'js',
      body:'teste',
      comments: 7
    },
    {
      title:'aprendendo c#',
      category:'js',
      body:'teste',
      comments: 7
    },
    {
      title:'aprendendo java',
      category:'js',
      body:'teste',
      comments: 7
    }
  ]

  res.render('blog', {posts})
})

app.get('/', (req, res) => {
  
  const user = {
    name: "leozinho",
    surname: "kekw",
    age:21
  }

  const teste = "Teste de palavras"

  const auth = true

  const aproved = true

  res.render('home', { user: user, teste, auth, aproved })
})

app.listen(3000, () =>{
  console.log('Porta funcionando no localhost:3000')
})
