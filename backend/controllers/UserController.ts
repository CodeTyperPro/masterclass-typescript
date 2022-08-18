import {Request, Response} from 'express';
import EmailService from '../src/services/EmailService';

const users = [
    {name: 'Alfredo', email: 'alfredo@gmail.com'},
];

export default{
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Alfredo', 
                email: 'alfredo@gmail.com'
            },
            message: {
                subject: 'Welcome to the System', 
                body: 'Welcome!'}
            }
        );

        return res.send();
    }
};