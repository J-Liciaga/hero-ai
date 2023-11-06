CREATE TABLE Calendars (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36),
    project_id VARCHAR(36) REFERENCES Projects(id),
    calendar_id VARCHAR(36) REFERENCES Calendars(id),
    name VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);