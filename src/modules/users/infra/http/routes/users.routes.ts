import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersControllers from '../controllers/UsersController';
import UsersAvatarControllers from '../controllers/UserAvatarController';

const usersRouter = Router();

const usersControllers = new UsersControllers();
const usersAvatarControllers = new UsersAvatarControllers();

const upload = multer(uploadConfig);

usersRouter.post('/', usersControllers.create);

usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    usersAvatarControllers.update,
);

export default usersRouter;
