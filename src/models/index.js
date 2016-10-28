'use strict';

const Sequelize = require('sequelize');

const user = require('./user');

const reservation = require('./reservation');
const room = require('./room');
const roomType = require('./room-type');
const paymentMethod = require('./payment-method');
const bookingAgent = require('./booking-agent');
const bill = require('./bill');
const billDetail = require('./bill-detail');

module.exports = function () {
  const app = this;

  const sequelize = new Sequelize(app.get('db_url'), {
    dialect: app.get('db_dialect'),
    dialectOptions: { ssl: app.get('connection_method').ssl }
  });
  app.set('sequelize', sequelize);

  app.configure(user);
  app.configure(reservation);
  app.configure(room);
  app.configure(roomType);
  app.configure(paymentMethod);
  app.configure(bookingAgent);
  app.configure(bill);
  app.configure(billDetail);

  app.set('models', sequelize.models);

  Object.keys(sequelize.models).forEach(function (modelName) {
    if ('associate' in sequelize.models[modelName]) {
      sequelize.models[modelName].associate();
    }
  });

  sequelize.sync();
};
