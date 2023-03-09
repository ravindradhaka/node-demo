module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transaction", {
      id: {
        type: Sequelize.DataTypes.UUID, primaryKey: true
      },
      amount: {
        type: Sequelize.DataTypes.DOUBLE
      },
      description: {
          type: Sequelize.STRING
      }
    });
  
    return Transaction;
  };