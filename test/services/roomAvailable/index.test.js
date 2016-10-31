'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('room available service', function() {
  it('registered the rooms available service', () => {
    assert.ok(app.service('rooms-available'));
  });

  it('find available rooms in a period of time', () => {
    const schedules = app.service('rooms-available');
    schedules.find({
      query: {
        checkIn: '2016-10-31',
        checkOut: '2016-11-11'
      }
    }).then(roomsAvailable => {
      assert.equal(roomsAvailable.skip, 0);
    });
  });
});
