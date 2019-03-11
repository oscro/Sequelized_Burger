module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    
    return Burgers;
  };