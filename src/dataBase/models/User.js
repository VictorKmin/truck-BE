const { Schema, model } = require('mongoose');

const { userRolesEnum } = require('../../constants');

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String, required: true },
  organization_id: { type: String, required: true, ref: 'Organization' },
  role: { type: String, enum: Object.values(userRolesEnum) }
})

userSchema.statics = {
  find
}

module.exports = model('User', userSchema);
