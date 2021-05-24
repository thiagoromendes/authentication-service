import { Request, Response } from "express";
import { CreateAuthService } from "../service/CreateAuthService";

class AuthenticationController{

    async create(request:Request, response:Response){

        const credentialsBody = request.body

        const createAuth = new CreateAuthService();

        const auth = await createAuth.execute(credentialsBody);

        return response.json(auth);

    }
}

export {AuthenticationController};