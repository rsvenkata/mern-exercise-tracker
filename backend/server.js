import express from "express";
import exercisesRouter from './routes/exercises'
import usersRouter from './routes/users'
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'

const x = dotenv.config()
const app = express();
const PORT = 5000;

//body parser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

const uri = process.env.ATLAS_URI
mongoose.Promise = global.Promise;
mongoose.connect(
  uri,
  {
    user: "soccerapp",
    pass: "soccerapp",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB connection succesful!!!')
})


app.listen(PORT, () => { console.log(`Server started at ${PORT}`) });
app.get("/", (req, res) => { res.send(`App is running on ${PORT}`) });
app.get("/hello", (req, res) => { setTimeout(() => { res.send(`Hello there from ${process.env.PORT}!`) }, 2360) });