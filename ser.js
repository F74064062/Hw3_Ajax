
const express = require('express')

const app = express()

const port = 17586

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}`))

app.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.student_ID}`)
})