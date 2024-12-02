import { Document } from 'mongoose'

export interface IUser extends Document {
    fullName: string;
    userName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    _doc?: any;
}