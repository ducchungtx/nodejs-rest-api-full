import { Router } from 'express';
import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';
import * as userController from './user.controllers';
import userValidation from './user.validation';

const routers = new Router();

routers.post('/signup',validate(userValidation.signup), userController.signUp);
routers.post('/login', authLocal, userController.login);

export default routers;
