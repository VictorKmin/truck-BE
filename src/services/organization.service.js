const { Organization } = require('../dataBase/models');

module.exports = {
  getById: (organizationId) => {
    return Organization.findById(organizationId);
  },

  getList: (filterObject = {}, limit = 20, offset = 0) => {
    return Organization
      .find(filterObject)
      .limit(limit)
      .skip(offset);
  },

  create: (createObject) => {
    return Organization.create(createObject);
  }
}
