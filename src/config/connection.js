import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    database: 'node_23576',
    username: 'root',
    password: '',
    port: 3306,
    pool: { max: 10, min: 0 }
});

export const dbConnect = () => {
    sequelize.authenticate()
        .then(() => console.log('Se estableció la conexión'))
        .catch((err) => console.error('No se puede conectar', err))
}