import {Socket} from 'socket.io';

export const disconnectClient = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    });
}

export const listenMessage = (client: Socket) => {
    client.on('mensaje', (payload: any) => {
        console.log('Mensaje recibido');
        console.log(payload);
    })
}