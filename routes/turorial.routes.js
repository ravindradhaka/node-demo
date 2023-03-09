module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const wallet = require("../controllers/wallet.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", tutorials.create);

    router.post("/setup_wallet", wallet.setupWallet);
    router.post("/transactions/:id", wallet.createTransaction);
  
    router.get("/", tutorials.findAll);
  
    router.get("/published", tutorials.findAllPublished);
  
    router.get("/:id", tutorials.findOne);
  
    router.put("/:id", tutorials.update);
  
    router.delete("/:id", tutorials.delete);
  
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
};