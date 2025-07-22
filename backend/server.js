import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import mealRouter from './routes/mealRoute.js'
import groceryListRouter from './routes/groceryListRoute.js'
/* 
import MealModel from './models/mealModel.js';

MealModel.syncIndexes()
  .then(() => console.log("✅ Unique index synced for MealModel"))
  .catch((err) => console.error("❌ Index sync error:", err)); 
*/

//App Config
const app=express() //create instance of express
const port=process.env.PORT || 4000
connectDB()

//Middlewares
app.use(express.json())
app.use(cors())

//api end points
app.use('/api/user',userRouter)
app.use('/api/meals',mealRouter)
app.use('/api/grocery',groceryListRouter)

app.get('/', (req,res)=>{
    res.send('API Working')
})


app.listen(port,()=> console.log("Server started on PORT: "+port))