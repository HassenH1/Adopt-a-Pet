const express = require('express')
const app = express()
const fetch = require('node-fetch');
const PORT = 8000
const bcrypt = require('bcryptjs')
const User = require("./models/User")
const methodOverride = require("method-override")
const cors = require('cors')
require('./config/db')

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'));

app.post('/signup', async (req, res) => {
  console.log("are we there yet?")
  console.log(req.body)
  try {
    const createdUser = await User.create(req.body)
    res.json(createdUser)
  } catch (err) {
    console.log(err)
  }
})

app.get("/", (req,res) => {
  res.send("The Route is Popping!")
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})