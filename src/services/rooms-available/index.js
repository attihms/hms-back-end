'use strict';

const service = require('feathers-sequelize');
const sequelize = require('sequelize');
const hooks = require('./hooks');

class RoomAvailable {
  setup(app) {
    this.app = app;
  }

  find(params) {
    const reservations = this.app.get('models').reservations;

    const { checkIn, checkOut } = params.query;

    let query = null;
    if (checkIn && checkOut) {
      query = {
        $or: [
          {
            checkIn: {
              $gt: checkIn,
              $lt: checkOut
            }
          },
          {
            checkOut: {
              $gt: checkIn,
              $lt: checkOut
            }
          }
        ]
      };
    }

    return reservations.findAll({
      attributes: ['roomTypeId', [sequelize.fn('COUNT', sequelize.col('roomTypeId')), 'occupied']],
      where: query,
      group: ['roomTypeId']
    });
  }
}

module.exports = function () {
  const app = this;

  // Initialize our service with any options it requires
  app.use('/rooms-available', new RoomAvailable());

  // Get our initialize service to that we can bind hooks
  const roomAvaiableService = app.service('/rooms-available');

  // Set up our before hooks
  roomAvaiableService.before(hooks.before);

  // Set up our after hooks
  roomAvaiableService.after(hooks.after);
};
