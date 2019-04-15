import { Router, Request, Response } from 'express';

const routerApi = Router();

routerApi.post('/users/login', ( req: Request, res: Response ) => {
    console.log(req.body)
    let user = req.params.user;
    let password = req.params.password;
    console.log(user + ' iniciado con ' + password);
    res.json({
        ok: true,
        usuario: user,
        password: password
    });
});

export default routerApi;