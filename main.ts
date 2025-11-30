import express from "express"

const app = express()
const PORT = 9000

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/page-2', (req, res) => {
    res.send('My name is Nguyen Ha')
})

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
})