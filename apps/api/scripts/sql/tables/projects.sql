CREATE TABLE Projects (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36) REFERENCES Users(id),
    name VARCHAR(255),
    description TEXT,
    deadline DATETIME,
    priority ENUM('Low', 'Medium', 'High')
);