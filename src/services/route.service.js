const { Route } = require('../dataBase/models');

module.exports = {
    getRoutes: query => Route.find(query),

    getSingleRoute: filterObject => Route.findOne(filterObject),

    createRoute: routeObject => Route.create(routeObject),

    updateRoute: (findObject, updateObject) => Route.updateOne(findObject, { $set: updateObject }),
};
