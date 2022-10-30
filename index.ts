import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import  route   from './src/routes/web'
import  AppDataSource  from "./src/config/connectDB"
import { error } from 'console';
dotenv.config();

const app: Express = express();
app.use(express.json());
route(app);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
AppDataSource.initialize()
    .then(() => {
        console.log('Connect DB successful')
    
    })
    .catch(error);