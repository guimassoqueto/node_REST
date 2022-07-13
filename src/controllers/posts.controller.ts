import { Request, Response } from "express";

interface IPost {
    title: string;
    content: string;
    createdAt: Date;
}

var posts: IPost[] = [
    {
        title: "Post1",
        content: "Author1",
        createdAt: new Date()
    },
    {
        title: "Post2",
        content: "Author2",
        createdAt: new Date()
    },
]

export function getPosts(req: Request, res: Response) {
    res.status(200).json({
        posts: posts,
    })
}

export function postPosts(req: Request, res: Response) {
    const { title, content }: { title: string, content: string } = req.body;
    const new_post: IPost = {
        title,
        content,
        createdAt: new Date()
    }

    posts = [ ...posts, new_post ]

    res.status(201).json({
        status: 201,
        message: 'new post created',
        post: new_post
    })
}