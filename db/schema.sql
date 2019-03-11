### Schema

--LOCALHOST INIT
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- JAWSDB Init

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('The Colossus', false);
INSERT INTO burgers(burger_name, devoured) VALUES ('The Maximus', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('The Hierarchy', false);