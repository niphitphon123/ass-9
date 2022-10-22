const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Niphitphon Preedeesakulchai')
})

app.get('/getabout', (req, res)=> {
    let data = {
        name: 'Niphitphon Preedeesakulchai',
        age: 19,
        email: 'niphitphon.pree@bumail.net',
        address: 'Chockchai4 Bangkok',
        detail: 'Hello, My Name Is Niphitphon Preedeesakulchai. My Nickname Is Pete. Now 19 Years Old. Studying Multimedia & Entertainment Engineering At Bangkok University. I Lived With My Family In Bangkok. My Family Has 7 People, Grandfather Grandmother Uncle Father Mother Sister And Me. My Hobby Is Listening To Music And Play Game With My Friend. My Favorite Sport Is Basketball.',
    }
    res.send(data)
})

app.get('/getproject', (req, res)=> {
    let data = {
        project_name: 'Hilight Overwatch',
        project_description: 'คลิปHilight เกมOverwatch ',
        project_link: 'none',
    }
    res.send(data)
})

app.get('/getcontact', (req, res)=> {
    let data = {
        email: 'niphitphon.pree@bumail.net',
        address: 'Chockchai4 Bangkok',
        phone_number: '086-386-6384',
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})