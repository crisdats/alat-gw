// autoresponse.js
const axios = require('axios');

const handleAutoResponse = async (message, sender) => {
    try {
        // Make an API request to fetch the auto-reply text
        const response = await axios.get(`https://btch.us.kg/simi?text=${message}`);
        return response.data.reply;  // Assume API returns a `reply` field
    } catch (error) {
        console.error("Error fetching auto response:", error);
        return "Sorry, I couldn't generate a response at this moment."; // Fallback response
    }
};

module.exports = { handleAutoResponse };
