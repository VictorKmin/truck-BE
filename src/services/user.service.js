const { User } = require('../dataBase/models');

module.exports = {
  getById: (userId) => {
    return User.findById(userId);
  },

  getList: (filterObject = {}, limit = 20, offset = 0) => {
    return User
      .find(filterObject)
      .limit(limit)
      .skip(offset);
  },

  create: (createObject) => {
    return User.create(createObject);
  }
}
