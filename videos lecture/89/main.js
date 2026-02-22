const express = require('express')
const app = express()
const port = 3000


app.use(express.static("public"))



app.get('/index', (req, res) => {
  console.log("heyt its a index put request ")
  res.send('Hello World this get  new file !')
})



app.post('/', (req, res) => {
  console.log("hey its a post request ")
  res.send('Hello World thisget  new file !')
})



app.put('/', (req, res) => {
  console.log("hey its a put request ")
  res.send('Hello World thisget  new file !')
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
