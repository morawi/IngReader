import express from "express"

const app = express()
const port = 3000

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/proceesImg', (req, res) => {
  res.send('To be implemented.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})