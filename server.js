require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
// const helmet = require('helmet')

console.log(process.env.API_TOKEN)

app.use(morgan('dev'))
app.use(cors())
app.use((req, res) => {
  res.send('Hello, you!')
})

/* app.use(ValidateBearerToken)

function ValidateBearerToken(req, res, next) {
  const apiToken = process.env.API_TOKEN
  const authToken = req.get('Authorization')

  if (!authToken || authToken.split(' ') [1] !== apiToken) {
    console.log("unauthorized request: api token check failed")
    return res.status(401).json({ error: 'Unauthorized request'})
  }
} */

const validGenre = []
const validCountry = []
const validAvgVote = []

/* function handleGetGenre(req, res) {
  res.json(validGenre)
}
  
app.get('/genres', handleGetGenre) */

const PORT = 8200

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
