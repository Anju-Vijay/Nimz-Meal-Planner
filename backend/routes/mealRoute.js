import express from 'express'
import { addMeals,listDailyMeals } from '../controllers/mealController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const mealRouter=express.Router()

mealRouter.post('/add-meals',authMiddleware, addMeals)
mealRouter.get('/daily-meals',authMiddleware, listDailyMeals)

export default mealRouter;