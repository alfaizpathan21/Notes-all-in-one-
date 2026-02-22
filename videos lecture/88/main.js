const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World  why it not working   !')
})


app.get('/about', (req, res) => {
  res.send('Hello World  about    !')
})

app.get('/contact', (req, res) => {
  res.send('Hello World  get contaact here  !')
})


app.get('/blog/intro-to-js', (req, res) => {
  res.send('Hello World  blog    !')
})


// app.get('/blog/:slug', (req, res) => {
//   res.send('Hello ${req.params.slug }   ')
// })


app.get('/blog/:slug/:sec', (req, res) => {
  res.send(`Hello: ${req.params.slug} and ${req.params.sec}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
