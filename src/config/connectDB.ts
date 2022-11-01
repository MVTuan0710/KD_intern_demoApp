import "reflect-metadata";
import { DataSource } from "typeorm";
import { AccountEntity } from "../entity/accountEntity";
import { BookEntity } from "../entity/bookEntity";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "database-test",
    entities: [BookEntity, AccountEntity],
    synchronize: false,
    logging: false,
})


export default AppDataSource;