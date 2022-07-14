import express, { Express } from "express";
// npm middlewares imports
import bodyParser from "body-parser";
import { body } from "express-validator";
// routes imports
import { postsRoute } from "./routes/posts.route";
// custom middlewares
import allowCors from './middlewares/allowCors.middleware';

// constants
const app: Express = express();
const PORT: number = 8000;

// middlewares
app.use(bodyParser.json({
    type: 'application/json'
}))
// middleware cors
app.use(allowCors)

// handling routes and validator middleware
app.use('/feed', [
    body('title').trim().isLength({min: 5}),
    body('content').trim().isLength({min: 5})
], postsRoute);

app.listen(PORT, 'localhost', () => console.log(`Server is listening on port ${PORT}...`))
