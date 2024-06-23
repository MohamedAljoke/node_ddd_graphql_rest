CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an enum type for JobStatus
CREATE TYPE job_status AS ENUM ('open', 'closed', 'in_progress');
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    company_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status job_status NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);



-- Insert 10 records into the companies table
INSERT INTO companies (name, email) VALUES
('Company A', 'companya@example.com'),
('Company B', 'companyb@example.com'),
('Company C', 'companyc@example.com'),
('Company D', 'companyd@example.com'),
('Company E', 'companye@example.com'),
('Company F', 'companyf@example.com'),
('Company G', 'companyg@example.com'),
('Company H', 'companyh@example.com'),
('Company I', 'companyi@example.com'),
('Company J', 'companyj@example.com');