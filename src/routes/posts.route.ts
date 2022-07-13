import { Router } from "express";
// controllers imports
import { getPosts, postPosts } from '../controllers/posts.controller';
export const postsRoute: Router = Router();

postsRoute.get('/posts', getPosts);
postsRoute.post('/posts', postPosts);

