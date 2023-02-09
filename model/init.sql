DROP TABLE IF EXISTS Countries; 

CREATE TABLE Countries (
    ID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    );

    INSERT INTO Countries (Name) VALUES('Spain');
    INSERT INTO Countries (Name) VALUES('France');


DROP TABLE IF EXISTS Months; 

CREATE TABLE Months (
    ID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    );

    INSERT INTO proximity.Months (Name) VALUES('January');
    INSERT INTO proximity.Months (Name) VALUES('February');
    INSERT INTO proximity.Months (Name) VALUES('March');
    INSERT INTO proximity.Months (Name) VALUES('April');
    INSERT INTO proximity.Months (Name) VALUES('May');
    INSERT INTO proximity.Months (Name) VALUES('June');
    INSERT INTO proximity.Months (Name) VALUES('July');
    INSERT INTO proximity.Months (Name) VALUES('August');
    INSERT INTO proximity.Months (Name) VALUES('September');
    INSERT INTO proximity.Months (Name) VALUES('October');
    INSERT INTO proximity.Months (Name) VALUES('November');
    INSERT INTO proximity.Months (Name) VALUES('December');


DROP TABLE IF EXISTS Types; 

CREATE TABLE Types (
    ID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    );

    INSERT INTO Types (Name) VALUES('Vegetable');
    INSERT INTO Types (Name) VALUES('Fruit');

DROP TABLE IF EXISTS Seasons; 

CREATE TABLE Seasons (
    ID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    );

    INSERT INTO Seasons (Name) VALUES('In season');
    INSERT INTO Seasons (Name) VALUES('Pre/post season');
    INSERT INTO Seasons (Name) VALUES('Out of season');

CREATE TABLE Products (
    ID BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50) NOT NULL,
    TypeID BIGINT NOT NULL,
    );

    INSERT INTO Products (Name, TypeID) VALUES('Asparragus', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Apple', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Apricot', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Artichoke', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Avocado', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Banana', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Basil', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Beetroot', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Borage', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Broad beans', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Broccoli', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Brussels sprouts', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Caqui', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Carrot', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Cauliflower', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Celery', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Chard', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Cherry', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Corn', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Cranberry', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Cucumber', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Dragon fruit', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Eggplant', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Endive', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Fennel', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Fig', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Garlic', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Grapefruit', 2);
    INSERT INTO Products (Name, TypeID) VALUES('Green beans', 1);
    INSERT INTO Products (Name, TypeID) VALUES('Green garlic', 1);








