import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

const prisma = new PrismaClient()


const create = async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body
            , data = await prisma.user.create({
                data: {
                    email, name
                }
            })
        return res.status(200).json(data)
    } catch (error: any) {
        return res.status(500).json({ error: error.stack })
    }
}
const get = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string
        , data = await prisma.user.findUnique({
            where:{
                email
            }
        })
        return res.status(200).json(data)
    } catch (error:any) {
        return res.status(500).json({ error: error.stack })
    }
 }

 const getAll = async (req: Request, res: Response) => {
    try {
        const data = await prisma.user.findMany()
        return res.status(200).json(data)
    } catch (error:any) {
        return res.status(500).json({ error: error.stack })
    }
 }
const update = async (req: Request, res: Response) => { 
    try {
        const {email,name} = req.body
        , data = await prisma.user.update({
            where:{
                email
            }
            ,data:{
                name
            }
        })
        return res.status(200).json(data)
    } catch (error:any) {
        return res.status(500).json({ error: error.stack })
    }
}
const remove = async (req: Request, res: Response) => { 
    try {
        const email = req.query.email as string
        , data = await prisma.user.delete({
            where:{
                email
            }
        })
        return res.status(200).json(data)
    } catch (error:any) {
        return res.status(500).json({ error: error.stack })
    }
}


export default { create, get, update, remove,getAll }