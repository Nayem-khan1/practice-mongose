import app from "./app"
import mongoose from "mongoose";
const port  = 5000;


// database connection
async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/practice')
        console.log("Database connection successful");

        app.listen(port, () => {
            console.log(`server running on port ${port}`)
        })
    }
    catch(error){
        console.log(`failed to connect database ${error}`)
    }
}
main()

