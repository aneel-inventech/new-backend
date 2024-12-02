import {connect} from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const dbConnect = async(app:any)=>{
    try {
        const port = process.env.PORT || 5000
        const uri = process.env.PORT
        !uri && console.log(`URI not found...`)
        const dbConnected = await connect(process.env.MONGO_URL as string)
        console.clear()
        dbConnected && console.log(`Database Connected successfully ${dbConnected.connection.host}`)
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });

    } catch (error) {
        console.log(`Error --> ${error}`)
    }
}