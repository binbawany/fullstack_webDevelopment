-- Databases are used to hold and organize data in a structured way.
-- SQL (Structured Query Language) is the language used to interact with databases. mysql, postgresql, sqlite are popular SQL databases.
-- NoSQL databases are non-relational databases that store data in a flexible, schema-less way. MongoDB is a popular NoSQL database. Document-based databases store data in JSON-like documents.


-- Create a new database named 'myfirstdb'
CREATE DATABASE myfirstdb;

-- Use the newly created database
USE myfirstdb;

-- Create a new table named 'users' with columns for id, name, and email
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

--crud operations

-- Insert sample data into the 'users' table. CREATE
INSERT INTO users (name, email) VALUES ('Muzammil', 'muzammil@muzammil.com');
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (name, email) VALUES ('Bob', 'bob@example.com');
-- Query the 'users' table to retrieve all records. READ
SELECT * FROM users;

-- Update a user's email in the 'users' table. UPDATE
UPDATE users SET email = 'muzammil@example.com' WHERE name = 'Muzammil';

-- Delete a user from the 'users' table. DELETE
DELETE FROM users WHERE name = 'Bob';

-- Query the 'users' table again to see the changes
SELECT * FROM users;

DROP TABLE users;
DROP DATABASE myfirstdb;