import express, { Express } from 'express';
import dotenv from 'dotenv';
import  route   from './src/routes/web'
import  AppDataSource  from "./src/config/connectDB"
import { error } from 'console';
import  configPassPort   from './src/config/passPort'
import  session  from 'express-session';
import passport from 'passport';


dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(session({secret: '123'}));
app.use(passport.initialize());
app.use(passport.session());


configPassPort(app);
app.use(route);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});


AppDataSource.initialize()
    .then(() => {
        console.log('Connect DB successful')
    
    })
    .catch(error);