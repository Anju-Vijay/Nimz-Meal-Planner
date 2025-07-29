import mongoose from 'mongoose'

// Meals Schema
const mealSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    day:{type:String,required:true, enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']},
    meals:{
        breakfast: {type: String, required:true},
        lunch: {type: String, required:true},
        dinner: {type: String, required:true}, 
    },
    date: { type: Number, default: () => Date.now() }
})
//to prevent multiple entries on the same day
mealSchema.index({ user: 1, day: 1 }, { unique: true });

const MealModel=mongoose.models.Meal || mongoose.model("Meal",mealSchema)
export default MealModel