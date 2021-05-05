const { Schema, model } = require('mongoose');

const oAuthSchema = new Schema({
  access_token: { type: String },
  refresh_token: { type: String },
  _user_id: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

oAuthSchema.virtual('user', {
  ref: 'User',
  localField: '_user_id',
  foreignField: '_id',
  justOne: true
});

oAuthSchema.pre('find', function () {
  this.populate('user')
});

oAuthSchema.pre('findOne', function () {
  this.populate('user')
});

module.exports = model('O_Auth', oAuthSchema);
