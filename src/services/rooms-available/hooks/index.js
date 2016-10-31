'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const manipulateData = (hook, next) => {
  const roomsOccupied = hook.result;
  const room = hook.app.service('rooms');

  room.find({
    attributes: ['capability']
  }).then(res => {
    let data = [];
    res.data.forEach((room, index) => {
      let capability = room.capability;
      if (roomsOccupied[index]) {
        capability -= roomsOccupied[index].dataValues.occupied;
      }
      data.push({
        'roomType': room.type,
        'capability': capability
      });
    });

    hook.result = data;

    next();
  });
};

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: [],
  get: []
};

exports.after = {
  all: [],
  find: [manipulateData],
  get: []
};
