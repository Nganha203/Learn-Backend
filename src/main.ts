import express from "express"
require('dotenv').config()
import webRoutes from './routes/web'
import getConnection from "./config/database"

const app = express()
const PORT = process.env.PORT || 8088

// config view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static file css/js/image
app.use(express.static('public'))

// config web routes
webRoutes(app)

app.listen(PORT, () => {
    console.log(`My app is running on port: ${PORT}`)
})