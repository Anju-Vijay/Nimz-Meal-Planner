import { client, whatsappNumber } from './twilioConfig.js';


const sendGroceryList=async(toPhoneNumber, groceryItems, userName)=>{


    const message = `👋 Hi ${userName}!\n\n🛒 Your Grocery List for this week:\n` +
    groceryItems.map((item, index) => `${index + 1}. ${item}`).join('\n')


     try {
    await client.messages.create({
      from: whatsappNumber,
      to: `whatsapp:${toPhoneNumber}`,
      body: message
    });
    console.log(`Grocery list sent to ${toPhoneNumber}`);
  } catch (error) {
    console.error(`Failed to send grocery list to ${toPhoneNumber}:`, error.message);
  }
}

export default sendGroceryList;
