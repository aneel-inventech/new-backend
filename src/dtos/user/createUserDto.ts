import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsString()
    @MinLength(3,{message:'User Name must be atleast 3 charectors long.'})
    userName!:string;

    @IsEmail({},{message:'Invalid format.'})
    email!:string;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long.' })
    password!: string;
}