import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    password:{type:String,required:true},
    meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }],
    grocery: { type: mongoose.Schema.Types.ObjectId, ref: 'GroceryList' }
})

const UserModel= mongoose.models.User || mongoose.model("User",userSchema)

export default UserModel