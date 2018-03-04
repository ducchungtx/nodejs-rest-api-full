import userRouter from './users/user.routes';
import { authJwt } from '../services/auth.services';

export default app => {
    app.use('/api/v1/users', userRouter);
    app.use('/hello', authJwt, (req, res) => {
        res.send('This is a private route!!!');
    })
}