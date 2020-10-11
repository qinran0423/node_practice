const Sequelize = require('sequelize');
const mysql = require('mysql2/promise')
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    operatorsAliases: true,
    // 关闭执行日志
    logging: false
  });


  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
  });

  const Product = sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  // ##END##
  return {
    User,
    Product
  }
}