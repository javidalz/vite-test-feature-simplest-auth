import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(bodyParser.json())

const posts = [{ id: 'id1' }, { id: 'id2' }]
const users = [{ email: 'a@gmail.com', password: '123' }]
const token = 'tokensecure1'

app.get('/', (req, res) => {
    res.send('slm')
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/posts/:id', (req, res) => {
    const id = req.params.id

    const post = posts.find((el) => el.id === id)

    if (post) res.send(post)
    else res.sendStatus(404)
})

app.post('/signin', (req, res) => {
    const { email, password } = req.body

    const user = users.find(
        (el) => el.password === password && el.email === email
    )

    if (user) {
        res.send(token)
    }

    res.status(422).send('Not correct credentials')
})

app.listen(3000, () => {
    console.log('server is up')
})
