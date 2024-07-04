import  { Sequelize } from "sequelize";
import { ENV } from './config.js'




const connection = new Sequelize(
    ENV.db_name,
    ENV.db_user,
    ENV.db_password,
    {
        host: ENV.db_host,
        dialect: ENV.db_dialect,
    }
    
);

try {
    await connection.authenticate();
} catch (error) {
    console.error('Unable to connect to the database: ',error);
    
}

export default connection