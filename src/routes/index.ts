import {Router} from 'express';
import {AuthenticationController} from '../controller/AuthenticationController'

const routes = Router();

const authenticationController = new AuthenticationController()

routes.post('/', authenticationController.create)

export default routes;