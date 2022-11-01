import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const checkToken = async (req: Request, res: Response, next: NextFunction) => {

    try{
        var tmp: any =  req.headers.authorization;
        console.log(tmp); 
        const token = tmp.split(' ');
        console.log(token[1]); 
        const result = jwt.verify(token[1],'1233');
        if(result){
            next();
        }else{
            console.log("token cua ban bi sai")
        }
    }catch(error){
        return res.json('loi dang nhap tu token');
    }
}
