"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //  * Add seed commands here.
    //  *
    //  * Example:
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "Admin",
          email: "joshuatheo19@gmail.com",
          password: "admin_Joshua_Theo@1",
          created_at: Date.now(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
