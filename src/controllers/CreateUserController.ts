import { Request, Response } from 'express';

class CreateUserController{
    handle(request: Request, response: Response) {
        return response.json([
            {
                nome: 'Joao' 
            },
            {
                nome: 'Maria'
            },
            {
                nome: 'Kate'
            }
        ])
    }
}

export { CreateUserController }