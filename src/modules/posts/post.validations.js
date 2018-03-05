import Joi from 'joi';

export default {
    createPost: {
        body: {
            title: Joi.string.min(3).required(),
        }
    }
}