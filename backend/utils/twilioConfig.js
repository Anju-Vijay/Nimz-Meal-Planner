import twilio from 'twilio';

/**
 * Twilio Configuration
 */

// Load credentials from environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;

// Create Twilio client using account SID and auth token
const client = twilio(accountSid, authToken);

// Export the client and WhatsApp sender number for use in other files
export { client, whatsappNumber };