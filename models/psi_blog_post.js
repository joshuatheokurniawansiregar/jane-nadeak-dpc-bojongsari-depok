'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class psi_blog_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  psi_blog_post.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'psi_blog_post',
  });
  return psi_blog_post;
};