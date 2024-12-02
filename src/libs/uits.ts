import bcrypt from 'bcrypt';
export const hashPassword = async (password:string): Promise<string> =>{
    // const saltRound = parseInt(process.env.SALT || '10',10)
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const hashedPassword = await bcrypt.hash(password,salt)
    console.log(hashedPassword)
    return hashedPassword;
}