import { client, whatsappNumber } from './twilioConfig.js';

/**
 * Sends a formatted grocery list to a user's WhatsApp number using Twilio API
 */

const sendGroceryList=async(toPhoneNumber, groceryItems, userName)=>{

    // Format message with greeting and numbered grocery items
    const message = `👋 Hi ${userName}!\n\n🛒 Your Grocery List for this week:\n` +
    groceryItems.map((item, index) => `${index + 1}. ${item}`).join('\n')


     try {
        // Send WhatsApp message using Twilio client
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
