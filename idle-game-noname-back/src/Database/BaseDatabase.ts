import { Knex } from "knex";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export class BaseDatabase {
    protected static connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306 || process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            multipleStatements: true
        }
    })
}



