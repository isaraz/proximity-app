DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(100) NOT NULL
    );

    INSERT INTO products (name, type) VALUES ('Asparragus', "Vegetable");
    INSERT INTO product (name, type) VALUES ('Artichocke', "Vegetable");
    INSERT INTO product (name, type) VALUES ('Avocado', "Fruit");
    INSERT INTO product (name, type) VALUES ('Banana', "Fruit");
