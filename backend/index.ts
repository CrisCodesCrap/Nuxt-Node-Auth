import express from "express"
import cors from "cors"

import "./databases/database"
import "./databases/cache"

import { server_port } from "./enviroment"
import router from "./routes"

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)


app.listen(server_port, () => {
    console.log(`Server is running on port ${server_port}`)
})