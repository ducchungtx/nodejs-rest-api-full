import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';

import { passwordReg } from './user.validation';

const UserScheme = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email'
        },
    },
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true

    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: [6, 'Passwod need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '{VALUE} is not a valid password'
        }
    }
});

UserScheme.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    }
    return next();
})

UserScheme.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password)
    }
}

export default mongoose.model('User', UserScheme);