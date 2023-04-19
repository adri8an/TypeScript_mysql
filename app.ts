
import dotenv from 'dotenv';
import Server from './models/server';

//Configurar dot.env
dotenv.config();


//Crear instancia del servidor
const server = new Server();
server.listen();