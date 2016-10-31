'use strict';

const _ = require('lodash');
const DataTypes = require('sequelize');
const CommonModel = require('./common-model');

module.exports = function () {
  const app = this;
  const sequelize = app.get('sequelize');

  const roomModel = {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.INTEGER,
      validate: {
          notEmpty: true
      }
    },
    capability: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
          notEmpty: true
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      validate: {
          notEmpty: true
      }
    }
  };

  const options = _.extend(
    {
      timestamps: true,
      paranoid: true
    },
    CommonModel.options
  );

  const room = sequelize.define(
    'rooms',
    roomModel,
    options
  );

  return room;
};
