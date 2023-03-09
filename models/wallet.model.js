module.exports = (sequelize, Sequelize) => {
    const Wallet = sequelize.define("wallet", {
      id: {
        type: Sequelize.DataTypes.UUID, primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.DataTypes.DOUBLE
      },
      metaInfo: {
          type: Sequelize.STRING
      }
    });
  
    return Wallet;
  };