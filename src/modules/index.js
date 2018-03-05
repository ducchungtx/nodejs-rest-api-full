import userRouter from './users/user.routes';
import postRouter from './posts/post.routes';

export default app => {
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/posts', postRouter);
}