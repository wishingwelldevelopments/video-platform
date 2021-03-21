const axios = require('axios');

module.exports = async (event) => {
    const apiUrl = 'https://notesv2-e30b0-default-rtdb.firebaseio.com/.json?auth=bJuvufaTZEzPtVGuOZG6X6VPId1tStzFEIByNS3a'

    try {
        var data = await axios.get(apiUrl);
        return {
            statusCode: 200,
            body: JSON.stringify(data.data)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({error:'something bad went down dog'})
        }
    }

};
