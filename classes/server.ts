import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/sockets';

export default class Server {
    
    private static ServerInstance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    public static get instance() {
        return this.ServerInstance || (this.ServerInstance = new this());
    }

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server(this.app);

        this.io = socketIO(this.httpServer);

        this.socketListen();
    }


    private socketListen() {
        console.log('Inicializando conexiones');

        this.io.on('connection', cliente => {;
            console.log('Conexion de cliente');
            socket.disconnectClient(cliente);
            socket.listenMessage(cliente);
        });
    }

    start( callback: any ) {
        this.httpServer.listen(this.port, callback);
    }

}