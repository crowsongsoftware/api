import express from 'express';
import userService from '../services/user.service';
import argon2 from 'argon2';
import debug from 'debug';

const log: debug.IDebugger = debug('app: user-controller');

class UserController{
    /* move to middleware */
    private createPasswordHash(password: string){
        let _salt = '1w1e1r1r'; //crypto.xxx;
        return { salt: _salt, password: argon2.hash(password + _salt) };
    };

    private getPasswordHash(){

    };

    /* Create */
    async createUser(req: express.Request, res: express.Response){
        let auth: {salt: string, password: Promise<string>} = this.createPasswordHash(req.body.password);
        req.body.salt = auth.salt;
        req.body.password = auth.password;
        const userId = await userService.create(req.body);
        
        res.status(201).send({id: userId});
    };

    /* Read */
    async listUsers(req: express.Request, res: express.Response){
        const users = await userService.list(100, 0);
        res.status(200).send(users);
    };

    async getUserById(req: express.Request, res:express.Response){
        const user = await userService.readById(req.body.id);
        res.status(200).send(user)
    };

    /* Update */
    async patch(req: express.Request, res: express.Response){
        if(req.body.password){
            req.body.password = await argon2.hash(req.body.password);
        };
        log(await  userService.patchById(req.body.id, req.body));
        res.status(204).send();
    };

    async put(req: express.Request, res: express.Response){
        req.body.password = await argon2.hash(req.body.password);
        log(await userService.putById(req.body.id, req.body));
        res.status(204).send();
    };

    /* Delete */
    async removeUser(req: express.Request, res: express.Response){
        log(await userService.deleteById(req.body.id));
        res.status(204).send();
    };
};

export default new UserController();