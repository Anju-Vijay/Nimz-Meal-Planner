import mongoose from "mongoose";

// Grocery List Schema
const groceryListSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true , unique: true},
    groceryList:[
        {  
        id:{ type: String,required:true},
        text:{ type: String,required:true}   
        }
    ] 
})
const GroceryListModel= mongoose.models.GroceryList || mongoose.model('GroceryList', groceryListSchema)

export default GroceryListModel