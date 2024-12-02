import express from 'express'
import { changePassword, getUser, getUsers, login, logout, logoutFromAllDevice, profile, register, resetPassword, updateProfile } from '../../contorllers/user/userController';

const userRoute = express.Router()

userRoute.post('/register', register)
userRoute.post('/login', login)
userRoute.get('/profile', profile)
userRoute.get('/:id', getUser)
userRoute.get('/', getUsers)
userRoute.put('/logout', logout)
userRoute.put('/logout-from-all-device', logoutFromAllDevice)
userRoute.put('/update-profile', updateProfile)
userRoute.put('/change-password', changePassword)
userRoute.put('/reset-password', resetPassword)

export default userRoute;