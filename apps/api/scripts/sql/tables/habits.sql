CREATE TABLE Habits (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36),
    name VARCHAR(255),
    description TEXT,
    frequency ENUM('Daily', 'Weekly', 'Monthly', 'Custom'),
    priority ENUM('Low', 'Medium', 'High'),
    preferred_time TIME,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);