import Server from './classes/server';
import router from './routes/router';
import routerApi from './routes/routerApi';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;

server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', router);
server.app.use('/api', routerApi);


server.start(() => {
    console.log('Server running on port ' + server.port);
});