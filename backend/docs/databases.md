CREATE DATABASE mobile_payment_db;
USE mobile_payment_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    recipient_id INT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (recipient_id) REFERENCES users(id)
);


`mysql -u your_mysql_username -p
`

Here we create the user 
```CREATE USER 'mobi_user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON mobile_payment_db.* TO 'mobi_user'@'localhost';
FLUSH PRIVILEGES;


```

