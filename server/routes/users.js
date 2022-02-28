const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const users = []

router.get('/users', (req, res) => {
  res.json(users)
})

// Creating new user
router.post('/users', async (req, res) => {
  try {
    const saltedHashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = {
      name: req.body.name,
      password: saltedHashedPassword
    }

    users.push(newUser)
    res.status(201).send('User created')
  }
  catch {
    res.status(500).send()
  }
})

// Login route
router.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)

  if(!user) {
    return res.status(400).send('User not found.')
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Login Successful.')

      // jwt token
      // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      // res.json(accessToken)

    } else {
      res.send('Invalid Password.')
    }
  }
  
  catch {
    res.status(500).send()
  }
})

module.exports = router;