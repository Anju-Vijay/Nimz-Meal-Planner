import MealModel from "../models/mealModel.js"

//add meals
const addMeals=async(req,res)=>{   
    try {
        const {day,breakfast,lunch,dinner}=req.body
        const user=req.user.id
        const mealData={
            user,
            day,
            meals:{
                breakfast,
                lunch,
                dinner
            }
        }
        console.log(mealData)
        const meals=new MealModel(mealData)
        await meals.save()
        res.json({success:true,Message:"Meal added"})
    } catch (error) {
         if (error.code === 11000) {
            return res.json({success: false, message: `Meal already exists for ${req.body.day}.`});
        }
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