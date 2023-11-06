CREATE TABLE AvoidHabits (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    calendar_id VARCHAR(36),
    name VARCHAR(255),
    frequency ENUM('Daily', 'Weekdays', 'Weekends', 'Custom'),
    FOREIGN KEY (calendar_id) REFERENCES Calendars(id)
);