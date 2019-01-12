DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barbie Doll", "Toy", 9.99, 150),
  ("Diapers", "Baby Supplies", 49.99, 200),
  ("Earrings", "Clothing and Acessories", 15.00, 25),
  ("How to lose a guy in 10 days", "Films", 19.50, 57),
  ("Apricots", "Food", .25, 300),
  ("Toilet Paper", "Supplies", 14.50, 102),
  ("Socks", "Clothing", 12.50, 50),
  ("Hairspray", "Beauty", 10.50, 2),
  ("Pam Spray", "Food", 4.26, 12),
  ("Toothpaste", "Beauty", 5.00, 13);