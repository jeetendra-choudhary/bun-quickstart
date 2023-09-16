import express, { Application } from 'express'
import bodyParser from "body-parser"
import route from './route'
const app: Application = express()

// Middleware to parse JSON request bodies
app.use(bodyParser.json())

route(app)

app.listen(3002, () => {
    console.log(`Bun server is listening at http://localhost:3002`)
})