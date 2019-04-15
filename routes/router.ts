import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', ( req: Request, res: Response ) => {
    res.json({
        ok: true,
        mensaje: 'Todo en orden'
    });
});

router.post('/mensajes', ( req: Request, res: Response ) => {
    let mensaje = req.body.mensaje;
    let remitente = req.body.remitente;
    res.json({
        ok: true,
        mensaje: mensaje,
        remitente: remitente
    });
});

export default router;