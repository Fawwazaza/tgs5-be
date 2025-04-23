import { Sequelize } from "sequelize";

const db = new Sequelize('notes', 'admin','password_db',{
    host: '34.42.36.6',
    dialect : 'mysql'
})

export default db;