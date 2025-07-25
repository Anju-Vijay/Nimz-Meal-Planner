import GroceryListModel from "../models/groceryListModel.js"

const addGroceryList=async(req,res)=>{
    try {
        const {items} =req.body
        const user=req.user.id
        const groceryData={ 
            user,
            groceryList:items.map(item=>({
                id:item.id,
                text: item.text  
            }))
        }
        const listExist=await GroceryListModel.findOne({user})
        if(!listExist){
            const grocery=new GroceryListModel(groceryData)
            await grocery.save()
            res.json({success:true,Message:"Grocery List Added"})
        }else{
            await GroceryListModel.findOneAndUpdate( { user },
            { $set: { groceryList: groceryData.groceryList } },
            { new: true })
            res.json({success:true,Message:"Grocery List Updated"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message}) 
    }
}
const listGrocery=async(req,res)=>{
    const user=req.user.id
    try {
       const groceryData= await GroceryListModel.findOne({user})
       const groceryItems=groceryData? groceryData.groceryList :[]
       res.json({success:true,groceryItems})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})   
    }
}

const removeGroceryList=async(req,res)=>{
    const user=req.user.id
    try {
        await GroceryListModel.findOneAndDelete({user})
        res.json({success:true,message:"Grocery List Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message}) 
    }
}
export {addGroceryList, listGrocery, removeGroceryList}
