-- create task table
CREATE TABLE IF NOT EXISTS allTasks (
    id SERIAL PRIMARY KEY,
    task TEXT,
    status TEXT,
    time_created TEXT,
    time_done TEXT
);