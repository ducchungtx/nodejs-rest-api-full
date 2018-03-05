import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

import { passwordReg } from './user.validation';
import constants from '../../config/constants';

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
}, { timestamps: true });

UserScheme.plugin(uniqueValidator, {
    message: '{VALUE} already taken!'
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
    },
    createToken() {
        return jwt.sign(
            {
                _id: this._id,
            },
            constants.JWT_SECRET,
        );
    },
    toJSON() {
        return {
            _id: this._id,
            userName: this.userName,
            token: `JWT ${this.createToken()}`,
            email: this.email
        }
    }
}

export default mongoose.model('User', UserScheme);