'use strict';

var _faker = require('faker');
var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function randomize(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomizeFloatNumber(min, max) {
  return (Math.random() * (min - max) + max).toFixed(1);
}

var app = require('../src/app');
var rooms = app.get('models').rooms;
var reservations = app.get('models').reservations;
var roomTypeService = app.service('roomTypes');

roomTypeService.find({paginate: {
  default: 10
}}).then(roomTypes => {
  var titles = ['Mr', 'Ms', 'Mrs'];
  var nationalities = ['China', 'Japan', 'Singapore', 'Korea', 'US', 'UK', 'Russia', 'Malaysia', 'Australia', 'Cambodia', 'European', 'American', 'Asian', 'Vietnam', 'Viet Kieu', 'Others'];
  var bookingSources = ['Travel Agent', 'Direct', 'Online Travel Agent', 'Hotel booking engine', 'Corporate'];
  var numbers = [1, 2, 3, 4, 5];
  var paymentMethods = ['Cash', 'Credit Card', 'Company bill'];
  var specialRequests = ['Extra bed', 'Babycot', 'Balcony', 'Quiet room', 'Bathtub', 'Shower', 'Nice view', 'Others'];

  [...Array(100)].map((_, i) => {
    rooms.create({
      name: i + 100 + '',
      type: randomize(roomTypes.data)['id'],
      capability: randomize([10, 15, 20]),
      active: true
    });

    reservations.create({
      firstName: _faker2.default.name.firstName(),
      lastName: _faker2.default.name.lastName(),
      title: randomize(titles),
      checkIn: _faker2.default.date.future(0, "2016-10-01"),
      checkOut: _faker2.default.date.future(0, "2016-10-11"),
      nationality: randomize(nationalities),
      bookingSourceId: randomize(numbers),
      bookingSourceName: randomize(bookingSources),
      roomTypeId: randomize(roomTypes.data)['id'],
      roomType: randomize(roomTypes.data)['name'],
      price: randomizeFloatNumber(100, 2000),
      numberOfRoom: randomize(numbers),
      numberOfPerson: randomize(numbers),
      paymentMethodId: randomize(numbers),
      paymentMethodName: randomize(paymentMethods),
      specialRequest: randomize(specialRequests)
    });
  });
});
