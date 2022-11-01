import passport from 'passport';

const passportApp = require ('./stratery/localStrategy')


const configPassPort = (app: any) => {
    
    passport.use(passportApp.strategy);
    passport.serializeUser(passportApp.serializeUser);
    passport.deserializeUser(passportApp.deserializeUser);

};

export default configPassPort;

