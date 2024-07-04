import dotenv from 'dotenv'


dotenv.config();

export const ENV = {

    port: process.env.PORT,
    token: process.env.TOKEN,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER ,
    db_name: process.env.DB_NAME ,
    db_dialect: process.env.DB_DIALECT,
    db_password: process.env.DB_PASSWORD
}
