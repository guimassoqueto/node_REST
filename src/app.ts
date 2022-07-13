import express, { Express, Request, Response } from "express";
// middlewares imports
import bodyParser from "body-parser";
// routes imports
import { postsRoute } from "./routes/posts.route";
// constants
const app: Express = express();
const PORT: number = 3000;

// middlewares
app.use(bodyParser.json({
    type: 'application/json'
}))

app.use(postsRoute);

app.listen(PORT, 'localhost', () => console.log(`Server is listening on port ${PORT}...`))