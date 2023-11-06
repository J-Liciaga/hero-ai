CREATE TABLE Tasks (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    calendar_id VARCHAR(36),
    project_id VARCHAR(36) REFERENCES Projects(id),
    name VARCHAR(255),
    description TEXT,
    deadline DATETIME,
    priority ENUM('Low', 'Medium', 'High'),
    status ENUM('TO_DO', 'IN_PROGRESS', 'DONE') NOT NULL,
    FOREIGN KEY (calendar_id) REFERENCES Calendars(id)
);