DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db; 

CREATE TABLE products(
    
    ID INTEGER(50) AUTO_INCREMENT NOT NULL,
    
    Product_Name VARCHAR(30) NOT NULL,
    
    Department_Name VARCHAR(30) NOT NULL,
    
    Price DECIMAL (10,2) NOT NULL,
    
    Stock_Quantity INTEGER(200) NOT NULL,
    
    PRIMARY KEY (id)
    );

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "cosmetics", 50.00, 12);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "baby", 25.00, 2);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "men", 12.00, 16);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "electronics", 178.00, 15);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "womens", 29.00, 5);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "outdoors", 68.00, 20);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "toys", 45.00, 5);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "hair", 35.00, 8);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "pets", 10.00, 8);
INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("mock", "shoes", 18.00, 4);

SELECT * FROM products;

