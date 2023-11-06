CREATE TABLE KanbanBoards (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36) REFERENCES Users(id),
    project_id VARCHAR(36) REFERENCES Projects(id),
    name VARCHAR(255),
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE KanbanColumns (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    board_id VARCHAR(36) REFERENCES KanbanBoards(id),
    name VARCHAR(100) NOT NULL,
    order_index INT NOT NULL,
    FOREIGN KEY (board_id) REFERENCES KanbanBoards(id)
);

CREATE TABLE KanbanCards (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    column_id VARCHAR(36),
    task_id VARCHAR(36) REFERENCES Tasks(id),
    name VARCHAR(255),
    description TEXT,
    FOREIGN KEY (column_id) REFERENCES KanbanColumns(id)
);
