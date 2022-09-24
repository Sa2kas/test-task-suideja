const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const text = Object.values(req.query)[0]
  const letter = Object.values(req.query)[1]
  var result = text.split(letter.toLowerCase()).join('').split(letter.toUpperCase()).join('');
  res.send(result)
})

app.listen(port, () => {
  console.log(`App is listening to port ${port}`)
})