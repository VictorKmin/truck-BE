const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

dotenv.config();

const { FRONTEND_URL, MONGO_URL, PORT } = require('./config/config');
const { httpMethods: { GET, POST } } = require('./constants');
const apiRouter = require('./routes/api.router');
const { routeService } = require('./services')
const cronRun = require('./cron-jobs');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: FRONTEND_URL,
        methods: [GET, POST]
    }
});

_connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.use('*', (req, res, next) => {
  next({ status: 404, message: 'Not found' });
});

app.use('*',  (err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({
      message: err.message,
      code: err.customCode
    })
})

// temporary option
io.on('connection', socket => {
    setInterval(async () => {
        const routes = await routeService.getRoutes();
        socket.emit('emit', routes);
    }, 30000)
});
// temporary option

server.listen(PORT, () => {
    console.log(`Listen port ${PORT}`);
    cronRun();
});

function _connectDB() {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });

    const { connection } = mongoose;

    connection.on('error', error => {
        console.log(error);
    });
}
