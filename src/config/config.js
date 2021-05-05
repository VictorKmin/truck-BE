module.exports = {
    FRONTEND_URL: process.env.FRONTEND_URL,
    MONGO_URL: process.env.MONGO_URL,
    PORT: process.env.PORT,
    TRACKERS_API_KEY: process.env.TRACKERS_API_KEY,
    TRACKERS_API_URL: process.env.TRACKERS_API_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'r_secret'
};
