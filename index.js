const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I can horoscope a little bit')
})

app.get('/getname', (req, res) => {
    res.send('Panisara Hangwongngam')
  })

  app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Panisara Hangwongngam',
        age: '20',
         
    }
    res.send(data)
  })

  app.get('/getabout', (req, res) => {
    let data = {
        name: 'Panisara Hangwongngam',
        age: '20',
        email: 'panisara.hang@bumail.net',
        address: 'TU',
         
    }
    res.send(data)
  })
  
  app.get('/getproject', (req, res) => {
    let data = {
        project_name: 'Panisara Hangwongngam',
        project_description: 'Sometimes I wish you never left',
        project_link: 'https://www.youtube.com/watch?v=5tdQ9jsHaZw',
         
    }
    res.send(data)
  })

  app.get('/getcontact', (req, res) => {
    let data = {
        address: 'TU',
        email: 'panisara.hang@bumail.net',
        phone_number: '0981206227',
         
    }
    res.send(data)
  })

app.listen(4444, () => {
  console.log(`Example app listening on port ${4444}`)
})