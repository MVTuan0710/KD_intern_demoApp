import { NextFunction, Request, Response } from 'express';
import { AccountDto,  RegisterAccountDto} from '../dtos/accountDTO';
import AuthService from '../services/authService';
import jwt from 'jsonwebtoken'

// login, register
class AuthController{
    public authService = new AuthService();
    public login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const dataAccount : AccountDto = req.body;  

          const payload: string = req.body.email;
          const jwtSecret: string = '1233';
        
          console.log(req.body)

          const token = jwt.sign(payload, jwtSecret);
          const login = await this.authService.login(dataAccount);
          if(login && token){
                res.status(200).json({ data: login,token: token, message: 'login successful, token generated successfully' });

          }else{
                res.status(401).json({ message: 'login fail' });
          }    
            
        } catch (error) {
            throw error;
        }
    }
    

    public register = async (req: Request, res: Response): Promise<void> => {
        try {
          const data : RegisterAccountDto = req.body;
          const login = await this.authService.create(data);
    
            res.status(200).json({ data: login, message: 'Register successful' });
        } catch (error) {
            res.status(400).json({message: "fail"})
        }
    };

    
}


export default AuthController;