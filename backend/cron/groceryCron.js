import cron from "node-cron"
import GroceryListModel from "../models/groceryListModel.js"
import sendGroceryList from '../utils/sendGroceryList.js';

cron.schedule('0 5 * * 5', async () => {
  console.log("🕙 Running weekly grocery list cron job...");
  try {
    const groceryDoc=await GroceryListModel.find({}).populate('user')
    for(let  doc of groceryDoc){
         if (doc.user && doc.user.phone && doc.groceryList.length > 0) {
        const phone=doc.user.phone
        const name = doc.user.name;
        const items=doc.groceryList.map(item=>item.text)
        await sendGroceryList(phone, items, name);
    }
    }
  } catch (error) {
    console.error('Cron Job Error:', error.message);
    
  }

})
