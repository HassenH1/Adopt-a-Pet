const express = require('express')
const app = express()
const fetch = require('node-fetch');
const PORT = 8000
const bcrypt = require('bcryptjs')
const User = require("./models/User")
const methodOverride = require("method-override")
const cors = require('cors')
require('./config/db')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'));

const tokenGet = async () => {
  await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "client_id": process.env.REACT_APP_CLIENT_ID,
      "client_secret": process.env.REACT_APP_CLIENT_SECRET,
      "grant_type": "client_credentials"
    })
  })
    .then(res => res.json())
    .then(data => token = data)
}

let token = ""

app.get("/", async (req, res) => {
  if (token === "") {
    await tokenGet()
  }

  fetch('https://api.petfinder.com/v2/animals?sort=random', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.access_token}`
    }
  })
    .then(res => res.json())
    .then(json => res.send(json));
})

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

app.post("/login", async (req, res) => {
  console.log(req.body)
  try {
    const userFound = await User.findOne({ email: req.body.email, password: req.body.password })
    console.log(userFound, "<---------------------found the user")

    // if (userFound === null) {
    //   res.status(401).send({ message: "User not found" })
    // }
    res.json(userFound)
  } catch (err) {
    res.send(err)
  }
})

app.get("/animal/:id", (req, res) => {
  fetch(`https://api.petfinder.com/v2/animals/${req.params.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token.access_token}`
    }
  })
    .then(res => res.json())
    .then(json => res.send(json));
})

app.listen(PORT, () => {
  console.log(`server running on ${PORT} port`)
})