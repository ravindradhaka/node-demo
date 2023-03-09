const db = require("../models");
const Op = db.Sequelize.Op;
const uuid = require('uuid')

exports.setupWallet = (req, res) => {
  if (!req.body.name && !req.body.amount) {
    res.status(400).send({
      message: "amount, name can not be empty!"
    });
    return;
  }

  const baseWallet = {
    id: uuid.v4(),
    name: req.body.name,
    amount: req.body.amount,
    metaInfo: req.body.metaInfo
  };

  db.wallet.create(baseWallet)
    .then(data => {
      res.send({id:data.id, statusMessage:"amount added"});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the wallet."
      });
    });
};

exports.createTransaction = async (req, res) => {
  if (!req.body.amount && !req.body.description && !req.params.id) {
    res.status(400).send({
      message: "amount, name can not be empty!"
    });
    return;
  }

  const walletNewId = req.params.id;

  const baseTransaction = {
    id: uuid.v4(),
    amount: req.body.amount,
    description: req.body.description,
    walletId: walletNewId
  };

  await db.sequelize.transaction(async (transaction) => { 
    db.wallet.findOne({ where: { id: walletNewId } }, { transaction: transaction })
      .then(result => {
        let finalAmount = result.amount + baseTransaction.amount
        db.transaction.create(baseTransaction)
          .then(data => {
            db.wallet.update({ amount: finalAmount }, { where: { id: walletNewId } }).then(response => {
              res.send({id:data, statusMessage:"first transaction"});
            })
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the transaction."
            });
          });
      })
  })
};
