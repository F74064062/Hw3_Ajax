
// Step 1 and step 2 code goes here

const express = require('express')
const app = express()
const port = 15849
const fs = require('fs');


/*
app.get('/step1', (req, res) => {
       res.send('<h1>hello world</h1>')
})
*/
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

// Step 3 code goes here
app.use(express.static(`${__dirname}/dist`))
//step 4
/*
let nRequests = 0
app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

app.get('/step5', (req, res) => {
  res.send(`Hello, ${req.query.fname} ${req.query.lname}`)
})
*/
app.get('/getlist', (req,res) =>{
  fs.readFile('./student.json', 'uft-8',(err, jsonString) =>{
    if(!err){
      res.send('jsonString')
    }
  })
})

/*
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/step7', (req, res) => {
  res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})
*/