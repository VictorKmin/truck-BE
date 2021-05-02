const { Schema, model } = require('mongoose');

const currentPositionSubSchema = {
    lat: { type: Number },
    lng: { type: Number }
}
const waypointsSubSchema = {
    location: { type: String },
    stopover: { type: Boolean, default: true }
}

const carScheme = new Schema({
    trackerExternalId: { type: Number, required: true},
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    waypoints: [waypointsSubSchema],
    currentPosition: currentPositionSubSchema,
    avoidFerries: { type: Boolean, required: true },
    avoidTools: { type: Boolean, required: true },
    avoidHighways: { type: Boolean, required: true }
}, {
    timestamps: true
});

module.exports = model('Route', carScheme);
