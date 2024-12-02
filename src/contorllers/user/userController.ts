import { Request, Response, NextFunction } from "express"
import { CreateUserDto } from "../../dtos/user/createUserDto"
import { validate } from "class-validator"
import { User } from "../../models/User"
import { hashPassword } from "../../libs/uits"
import { success } from "../../libs/common"
import { getReasonPhrase, StatusCodes } from "http-status-codes"

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { userName, email, password } = req.body

        const userDto = new CreateUserDto()

        Object.assign(userDto, req.body)

        const validationErrors = await validate(userDto)

        if (validationErrors?.length > 0) {
            res.status(StatusCodes.FORBIDDEN).json({
                success: success.FALSE,
                message: getReasonPhrase(StatusCodes.FORBIDDEN),
                errors: validationErrors?.map(({ property, constraints }) => ({
                    property,
                    constraints,
                })),
            });
            return;
        }


        const existingUser = await User.findOne({ email })

        if (existingUser) {
            res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: getReasonPhrase(StatusCodes.BAD_REQUEST)
            });
            return;
        }

        const hashedPassword = await hashPassword(password)
        const newUser = await User.create({ email, password: hashedPassword, userName })

        if (newUser) {

            const { password, ...others } = newUser.toObject();
            res.status(StatusCodes.OK).json({

                success: success.TRUE,
                message: getReasonPhrase(StatusCodes.OK),
                data: others
            });
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: success.FALSE,
            message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
            error
        });
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}

export const profile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}


export const logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}

export const logoutFromAllDevice = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}


export const updateProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}


export const changePassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}


export const resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { } = req.body
    } catch (error) {

    }
}

