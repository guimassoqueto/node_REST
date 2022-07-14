import { Request, Response } from "express";
import { validationResult, Result, ValidationError } from 'express-validator';

interface IPost {
    _id: string;
    title: string;
    author: string;
    creator: {
        name: string;
    }
    imageUrl: string;
    content: string;
    createdAt: Date;
}

var posts: IPost[] = [
    {
        _id: "1",
        title: "Post1",
        author: "Author1",
        creator: {
            name: "Jordi Polla"
        },
        imageUrl: "https://picsum.photos/300",
        content: "Lorem Ipsum1",
        createdAt: new Date()
    },
    {
        _id: "2",
        title: "Post2",
        author: "Author2",
        creator: {
            name: "Jordi Polla"
        },
        imageUrl: "https://picsum.photos/300",
        content: "Lorem Ipsum2",
        createdAt: new Date()
    },
    {
        _id: "3",
        title: "Post3",
        author: "Author3",
        creator: {
            name: "Jordi Polla"
        },
        imageUrl: "https://picsum.photos/300",
        content: "Lorem Ipsum3",
        createdAt: new Date()
    },
]

export function getPosts(req: Request, res: Response) {
    res.status(200).json({
        posts: posts,
    })
}

export function postPost(req: Request, res: Response) {
    const { title, author, imageUrl, content } = req.body;
    // handling validation errors
    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({
            status: 422,
            message: 'an error has occurred',
            error: errors.mapped()
        })
        return;
    }

    const new_post: IPost = {
        _id: Math.random().toString(),
        title,
        author,
        creator: {
            name: "Jordi Polla"
        },
        imageUrl,
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