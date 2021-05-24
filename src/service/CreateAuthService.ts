import {compare, hash} from 'bcryptjs' 
import { sign } from 'jsonwebtoken';
import appConfig from '../config/app';
import authConfig from '../config/auth';

interface CredentialsProps{
    user:string;
    password:string
}

class CreateAuthService {

    public async execute({user,password}:CredentialsProps){

        await hash(password, 8);
        
        const appUser = appConfig.app.user;
        const appPass =  await hash(appConfig.app.pass, 8);

        if(user !== appUser){
            return {
                error: 'incorrect user'
            }
        }
        
        const comparePassword = await compare(password, appPass)

        if(!comparePassword) {
            return {
                error: 'incorrect password'
            }
        }

        const {secret,expiresIn} = authConfig.auth

        const token = sign({}, secret, {
            subject: user,
            expiresIn
        })

        return token;

    }
}

export {CreateAuthService};