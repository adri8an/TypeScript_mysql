
import { Sequelize } from "sequelize";


const db = new Sequelize('Curso_Node', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;