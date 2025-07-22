import express from 'express'
import {addGroceryList,listGrocery} from '../controllers/groceryListController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const groceryListRouter= express.Router()

groceryListRouter.post("/add-grocery",authMiddleware, addGroceryList)
groceryListRouter.get("/list-grocery",authMiddleware, listGrocery)

export default groceryListRouter