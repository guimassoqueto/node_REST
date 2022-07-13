import { Request, Response, NextFunction } from "express";

export default function allowCors(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
}