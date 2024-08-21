CREATE DATABASE userDb;

\c userDb

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS Users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    oauth_provider VARCHAR(255) NOT NULL,
    oauth_id VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS Households (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS Household_Members (
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE,
    household_id UUID REFERENCES Households(id) ON DELETE CASCADE,
    role VARCHAR(255),
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, household_id)
);


CREATE TABLE IF NOT EXISTS Chores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    household_id UUID REFERENCES Households(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    time_estimate INTEGER,
    frequency VARCHAR(255),
    assigned_to UUID REFERENCES Users(id),
    status VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date DATE
);


CREATE TABLE IF NOT EXISTS Notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE,
    chore_id UUID REFERENCES Chores(id),
    type VARCHAR(255),
    message TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert initial data
-- You can add some sample data if needed
INSERT INTO Users (email, name, oauth_provider, oauth_id) VALUES
('admin@example.com', 'Admin User', 'Google', 'admin-google-id'),
('user@example.com', 'Regular User', 'Facebook', 'user-facebook-id');

INSERT INTO Households (name) VALUES
('Household A'),
('Household B');

INSERT INTO Household_Members (user_id, household_id, role) VALUES
((SELECT id FROM Users WHERE email = 'admin@example.com'), (SELECT id FROM Households WHERE name = 'Household A'), 'admin'),
((SELECT id FROM Users WHERE email = 'user@example.com'), (SELECT id FROM Households WHERE name = 'Household B'), 'member');

INSERT INTO Chores (household_id, title, description, time_estimate, frequency, assigned_to, status, due_date) VALUES
((SELECT id FROM Households WHERE name = 'Household A'), 'Clean the kitchen', 'Clean the kitchen thoroughly', 60, 'weekly', NULL, 'pending', CURRENT_DATE + INTERVAL '1 week'),
((SELECT id FROM Households WHERE name = 'Household B'), 'Mow the lawn', 'Mow the front and back lawn', 120, 'monthly', (SELECT id FROM Users WHERE email = 'user@example.com'), 'pending', CURRENT_DATE + INTERVAL '1 month');
