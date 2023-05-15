import { Schema, model } from "mongoose";
import { IFakeInfo } from "./User.interface";

const fakeUserSchema = new Schema<IFakeInfo>({
    id:{
        type: String,
        required: true,
        unique: true,
    },
    role:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        firstName:{
            type: String,
            required: true,
        },
        middleName:{
            type:String,
        },
        lastName:{
            type:String,
            required:true,
        }
    },
    gender:{
        type: String,
        enum: ["male", "female"]
    },
    datOfBirth:{
        type: String,
    },
    email:{
        type:String,
        required:true,
    },
    contactNo:{
        type:String,
        required:true,
    },
    emergencyContactNo:{
        type:String,
        required:true,
    },
    permanentAddress:{
        type:String,
        required:true,
    },
    presentAddress:{
        type:String,
        required:true,
    }
})

const UserFakeData = model<IFakeInfo>("UserFakeData", fakeUserSchema);

export default UserFakeData;