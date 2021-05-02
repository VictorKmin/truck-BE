const { Schema, model } = require('mongoose');

const organizationSchema = new Schema({
  name: { type: String },
  apiKey: { type: String, select: false }
  // TODO finish definition
})

module.exports = model('Organization', organizationSchema);
