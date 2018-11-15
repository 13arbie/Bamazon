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

 connection.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object
    connection.query("SELECT * FROM products", function (err, result) {
      if (err) throw err;
      console.log("--------------------------Available Items for Sale--------------------------")
      console.log(result);
      console.log("-----------------------------------------------------------------------------");
      
    });
  
    console.log(' ');
    inquirer.prompt([
      {
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to purchase?",
        validate: function(value){
          if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
            return true;
          } else{
            return false;
          }
        }
      },
      {
        type: "input",
        name: "qty",
        message: "How much would you like to purchase?",
        validate: function(value){
          if(isNaN(value)){
            return false;
          } else{
            return true;
          }
        }
      }
      ]).then(function(ans){
        var whatToBuy = (ans.id)-1;
        var howMuchToBuy = parseInt(ans.qty);
        var grandTotal = parseFloat(((res[whatToBuy].Price)*howMuchToBuy).toFixed(2));
  
        
        if(res[whatToBuy].StockQuantity >= howMuchToBuy){
         
          connection.query("UPDATE Products SET ? WHERE ?", [
          {StockQuantity: (res[whatToBuy].StockQuantity - howMuchToBuy)},
          {ItemID: ans.id}
          ], function(err, result){
              if(err) throw err;
              console.log("Success! Your total is $" + grandTotal.toFixed(2) + ". Your item(s) will be shipped to you in 3-5 business days.");
          });
  
          connection.query("SELECT * FROM Departments", function(err, deptRes){
            if(err) throw err;
            var index;
            for(var i = 0; i < deptRes.length; i++){
              if(deptRes[i].DepartmentName === res[whatToBuy].DepartmentName){
                index = i;
              }
            }
            
            
            connection.query("UPDATE Departments SET ? WHERE ?", [
            {TotalSales: deptRes[index].TotalSales + grandTotal},
            {DepartmentName: res[whatToBuy].DepartmentName}
            ], function(err, deptRes){
                if(err) throw err;
                //console.log("Updated Dept Sales.");
            });
          });
  
        } else{
          console.log("Sorry, there's not enough in stock!");
        }
  
        reprompt();
      })
  })
  }
  
  
  function reprompt(){
    inquirer.prompt([{
      type: "confirm",
      name: "reply",
      message: "Would you like to purchase another item?"
    }]).then(function(ans){
      if(ans.reply){
        start();
      } else{
        console.log("See you soon!");
      }
    });
  }
  
  start();
