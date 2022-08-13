import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true,
    },
    img:{
        type: String,
    },
},
{timestamps: true}
)

export default mongoose.model("User", UserSchema)