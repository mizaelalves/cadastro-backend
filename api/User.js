const { Model ,DataTypes }= require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init({ 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    sequelize,
    modelName:'user',
    timestamps: false
  }
);

module.exports = User;