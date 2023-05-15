import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

//Application routes
import userRoutes from "./app/modules/User/User.route"

//using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//api
app.use('/api/v1/user', userRoutes)

export default app;