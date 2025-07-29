import cron from "node-cron"
import GroceryListModel from "../models/groceryListModel.js"
import sendGroceryList from '../utils/sendGroceryList.js';


/**
 * Cron job to send weekly grocery list via WhatsApp using Twilio
 * Runs every Friday at 5:00 AM (change timing as needed)
 */
cron.schedule("0 5 * * 5", async () => {
  console.log("🕙 Running weekly grocery list cron job...");
  try {

    // Fetch all grocery lists with their linked user details
    const groceryDoc=await GroceryListModel.find({}).populate('user')
    for(let  doc of groceryDoc){
        if (doc.user && doc.user.phone && doc.groceryList.length > 0) {
        const phone=doc.user.phone
        const name = doc.user.name;

        // Loop through each grocery list 
        const items=doc.groceryList.map(item=>item.text)
        await sendGroceryList(phone, items, name);
    }
    }
  } catch (error) {
    console.error('Cron Job Error:', error.message);
    
  }

})
