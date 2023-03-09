# node-demo
[step 1] => pls clone the repo : https://github.com/ravindradhaka/node-demo.git

[step 2] => check the node version & run npm install

[step 3] => create .env file and copy the content of .env.example

[step 4] => start the node application `npm start` check the application is runing on localhost:808

[step 5] => POST API ADD money in wallet or setup ::

url : http://localhost:8080/api/tutorials/setup_wallet

content-type: application/json

req.body :  {
    "name": "new wallet",
    "amount": 10000,
    "metaInfo": "first transaction"
}


[step 6] => transaction api 
url : http://localhost:8080/api/tutorials/transactions/{id}

req.body {
    "description": "first transaction",
    "amount": -2000
}
