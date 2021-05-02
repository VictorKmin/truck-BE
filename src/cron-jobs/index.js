const cron = require('node-cron');
const axios = require('axios');

const { routeService } = require('../services');
const { TRACKERS_API_KEY, TRACKERS_API_URL } = require('../config/config');

module.exports = () => {
    cron.schedule('*/30 * * * * *', async () => {
        const { data } = await axios.get(TRACKERS_API_URL + TRACKERS_API_KEY);

        for (const value of data.vehicles) {
            const data = await routeService.getSingleRoute({ trackerExternalId: value.trackerExternalId });
            if (data) {
                const updateObject = {
                    currentPosition: {
                        lat: value.lat,
                        lng: value.lng
                    }
                }
                await routeService.updateRoute({ trackerExternalId: value.trackerExternalId }, { $set: updateObject })
            }
        }
    });
}
