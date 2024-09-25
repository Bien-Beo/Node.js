import express from 'express'
import cors from 'cors'
require('dotenv').config()
import initRoutes from './src/routes'
require('./connection_databasse')
const startBrowser = require('./browse')
const scrapeCotroller = require('./scrape_controller') 

let browse = startBrowser()
scrapeCotroller(browse)

const app = express()
app.use(cors({ //cors: cau hinh url duoc phep truy cap
    //origin: cho phep url vao server de lay data
    origin: process.env.CLIENT_URL, //lay bien trong file .env
    methods: ['GET', 'POST', 'PUT', 'DELETE'], //gioi han phuong thuc request
}))

app.use(express.json()) //Doc du lieu duoc tu data gui len
app.use(express.urlencoded({ extended: true})) //Neu data gui len khong phai kieu json thi urlencoded se bien dich sang json

initRoutes(app)

//Chay server can co port
//Neu khong lay duoc port o trong file thi se dinh nghia 1 port moi 8888
const PORT = process.env.PORT || 8888

const listener = app.listen(PORT, () => {
    console.log('Server is running on the port ' + listener.address().port)
})
