
import express, {Application} from 'express';

import cors  from "cors";

import  userRoutes  from "../routes/usuario";

import db from '../db/connection';


class Server {

    private app: Application;
    private port: String;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }


    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //Definir middlewares
        this.middlewares();
        //Definir mis rutas
        this.routes();

        //Definir BBDD
        this.dbConnection();

    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Base de datos Online');

        } catch (error) {
           throw new Error('Error al conectar la BD');
            
        }
    }

    middlewares(){
        //cors
        this.app.use( cors());

        //lectura del body
        this.app.use(express.json());

        //carpeta pública
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes);
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en el puerto:', this.port);
        })
    }
}

export default Server;