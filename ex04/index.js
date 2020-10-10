const Sequelize = require('sequelize');
const mysql = require('mysql2/promise')
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  // 暗号：哈希算法

  const cfg = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user_info'
  }

  const conn = await mysql.createConnection(cfg);
  const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREMENT,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id))`;
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING,
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
  });
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  });
  User.hasMany(Product);
  // ##END##
  return {
    User,
    Product
  }
}