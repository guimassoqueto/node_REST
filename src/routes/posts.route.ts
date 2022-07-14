import { Router } from "express";
// controllers imports
import { getPosts, postPost } from '../controllers/posts.controller';
export const postsRoute: Router = Router();

postsRoute.get('/posts', getPosts);
postsRoute.post('/post', postPost);

