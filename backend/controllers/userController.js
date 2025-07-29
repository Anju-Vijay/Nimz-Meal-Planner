import validator from "validator"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserModel from "../models/userModel.js"

//create  token
const createToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{ expiresIn: '3d' })
}
 
 //Route for user register
 const userRegister=async(req,res)=>{
    try {
        const {name,phone,email,password}=req.body
        //Check user exist
        const userExist=await UserModel.findOne({email})
        if(userExist){
           return res.json({success:false,message:"User already exists"})
        }
        //validating email format and strong password
        if(!validator.isEmail(email)){
           return res.json({success:false, message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }
        //Hashing user package
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=new UserModel({
            name,
            phone,
            email,
            password:hashedPassword
        })
        const user=await newUser.save()
        
        //Create token
        const token=createToken(user._id)

        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})   
    }
 }

 //Route for user Login
 const userLogin=async(req,res)=>{
    try {
        const{email,password}=req.body
        //Check if user exists
        const user=await UserModel.findOne({email})
        if(!user){
             return res.json({success:false,message:"Email doesn't exist, Please signup"})
        }
        //Compare passwords
        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch){

            // Generate token
            const token=createToken(user._id)
            res.json({success:true,token})
        }else{
            res.json({success:false,message: "Password doesn't match"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})   
        
    }

 }
 export {userRegister, userLogin}