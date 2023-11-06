CREATE TABLE Journal (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36),
    mood ENUM('Happy', 'Sad', 'Neutral', 'Angry', 'Anxious'),
    description TEXT,
    created_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);