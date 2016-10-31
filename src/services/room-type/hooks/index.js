'use strict';

const _ = require('lodash');
const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');

const manipulateData = (hook, next) => {
  hook.result.data = _.map(hook.result.data, function(type) {
    return {
      id: type.id,
      name: type.name
    };
  });

  next();
};

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [manipulateData],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
