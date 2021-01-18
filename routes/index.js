import { Router } from 'express';
import UserController from '../controllers/userController.js';
const routes = Router();
routes.get('/', UserController.getAllUsers);
routes.get('/:id', UserController.getSingleUser);
export default routes;