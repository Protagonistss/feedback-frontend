import { Response, Request } from 'express'
export const getUsers = (req: Request, res: Response) => {
    return res.json({
        err: 200,
        res: {
            users: [{ name: 'huangshan' }]
        }
    })
}