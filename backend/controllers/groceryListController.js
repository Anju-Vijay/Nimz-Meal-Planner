import GroceryListModel from "../models/groceryListModel.js"

const addGroceryList=async(req,res)=>{
    try {
        const {items} =req.body
        const user=req.user.id
        const groceryData={ 
            user,
            groceryList:items.map(item=>({
                items: {
                    id:item.id,
                    text: item.text
                }
            }))
        }
        console.log(groceryData)
        const grocery=new GroceryListModel(groceryData)
        await grocery.save()
        res.json({success:true,Message:"Grocery List Added"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

const listGrocery=async(req,res)=>{
    try {
        const user=req.user.id
        const groceryList=await GroceryListModel.find({user})
        console.log(groceryList)
        res.json({success:true,groceryList})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

export {addGroceryList,listGrocery}