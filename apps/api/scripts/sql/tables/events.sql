CREATE TABLE Events (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    calendar_id VARCHAR(36),
    name VARCHAR(255),
    description TEXT,
    start_time DATETIME,
    end_time DATETIME,
    is_meeting BOOLEAN,
    meeting_link BOOLEAN,
    is_recurring BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (calendar_id) REFERENCES Calendars(id)
);