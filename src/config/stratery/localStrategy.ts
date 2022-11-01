import AppDataSource from '../connectDB';
import { AccountEntity }  from '../../entity/accountEntity';

const LocalStrategy = require('passport-local');
const accountRepository = AppDataSource.getRepository(AccountEntity);

export const strategy = new LocalStrategy( {
  usernameField: "email",
  passwordField: "password"
},
  //next == done == cb
  async function (email: string, password: string, next: any) {
      try{
          const user = await accountRepository.findOne({ where: { email: email } });
          if(user) {
            const isMatch = password === user.password;
            if(isMatch) {
                return next(null, user, { message: 'Email & Passwor valid' });
            } else {
                return next(null, false, { message: 'Incorrect password.' });
            }
        } else {
            return next(null, false, { message: 'Incorrect username.'});
        }
      }
      catch(err){
          console.log(`--==-- Authentication error: ${err}`);
          return next(err);
      }
  }
);


export const serializeUser = function(account: AccountEntity, done: any) {
  done(null, account.email);
};

export const deserializeUser = async function(email: string, done: any) {
  try{
    const account = await accountRepository.findOne({ where: { email: email } });
    done(null, account);
  }catch(err){
    done(err, null);
  }
};