import MealModel from "../models/mealModel.js"

//add meals
const addMeals=async(req,res)=>{   
    try {
        const {formData}=req.body
        const user=req.user.id
        const mealExist=await MealModel.findOne({user,day:formData.day})
        if(mealExist){
            return res.json({success:false,message:`Meal data already exist for ${formData.day}`})
        }
        const mealData={
            user,
            day:formData.day,
            meals:{
                breakfast:formData.breakfast,
                lunch:formData.lunch,
                dinner:formData.dinner
            }
        }
        const meals=new MealModel(mealData)
        await meals.save()
        res.json({success:true,Message:"Meal added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
//list meals
const listDailyMeals=async(req,res)=>{
    try {
        const userId=req.user.id
        const mealData=await MealModel.find({user:userId})
        console.log(mealData)
        res.json({success:true, mealData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {addMeals, listDailyMeals}