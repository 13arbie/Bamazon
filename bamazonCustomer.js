var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err,res) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  console.log( "~~~~Welcome to BAMAZON~~~~")
  console.log("~~~~Available Items for Sale~~~~")

  
  inquirer.prompt([{
      type: "list",
      message: "What would you like to do?",
      choices: ["Post an Item", "Bid on an Item"],
      name: "action"
    }
  ]).then(function(res) {
    console.log(res);
    if(res.action === 'Bid on an Item') {

    } else {
        inquirer.prompt([
        {
            type: "input",
            message: "Product Name",
            name: "name"
        },
        {
            type: "input",
            message: "Bid Price",
            name: "price"
        },
        {
            type: "list",
            message: "Condition: New/Used",
            choices: ["New", "Used"],
            name: "condition"
        }
        ]).then(function(res) {
          var name = res.name;
          var price = res.price;
          var condition = res.condition;

          var queryString = `INSERT INTO products(name, price, state) VALUES("${name}", "${price}", "${condition}")`
          var query = connection.query(
              queryString,
              {},
              function(err, res) {
                  console.log(err);
                  console.log(res.affectedRows + " product inserted!\n");
              });
        });
    }

  });
});

