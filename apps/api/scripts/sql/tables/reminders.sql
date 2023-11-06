CREATE TABLE Reminders (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    task_id VARCHAR(36),
    event_id VARCHAR(36),
    project_id VARCHAR(36),
    reminder_time DATETIME,
    FOREIGN KEY (task_id) REFERENCES Tasks(id),
    FOREIGN KEY (event_id) REFERENCES Events(id),
    FOREIGN KEY (project_id) REFERENCES Projects(id)
);