import { Schema, model, Document } from 'mongoose'
import { IUser } from '../interfaces/userInterface/IUser'


const userSchema: Schema<IUser> = new Schema({
    fullName: {
        type: String,
        // required: true,
        trim: true
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

export const User = model<IUser>('User', userSchema)

