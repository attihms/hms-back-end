'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // return queryInterface.describeTable('tableName').then(attributes => {
    //   if ( !attributes.columnName ) {
    //     return queryInterface.addColumn('tableName', 'columnName', {
    //       type: Sequelize.INTEGER,
    //       defaultValue: 0
    //     });
    //   }
    // });

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    // return queryInterface.describeTable('tableName').then(attributes => {
    //   if ( attributes.columnName ) {
    //     return queryInterface.removeColumn('tableName', 'columnName');
    //   }
    // });

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
