import express, { Express, Request, Response } from "express";
// npm middlewares imports
import bodyParser from "body-parser";
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

// handling routes
app.use(postsRoute);

app.listen(PORT, 'localhost', () => console.log(`Server is listening on port ${PORT}...`))
