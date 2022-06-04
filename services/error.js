// import modules
const axios = require('axios');

module.exports = {
    // discord error reporting
    SendError: async (content) => {
        await axios({ 
            method: 'post',
            url: process.env.DISCORD_WEBHOOK_URL, 
            data: {content}
        }).then((res)=> {}).catch((err)=> { 
            console.log(err);
        })
    }
}