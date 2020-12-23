import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, _response) => {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();

    const authenticateUser = new AuthenticateUserService(usersRepository);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, token } = await authenticateUser.execute({
        email,
        password,
    });

    delete user.password;
});

export default sessionsRouter;
