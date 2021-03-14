-- Creates the database in workbench dropping if alrewady exists 

DROP DATABASE IF EXISTS notes
create DATABASE notes;
use notes;

-- Creates the table in workbench with primary key set
CREATE TABLE notes (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(255),
notetext VARCHAR(255),
PRIMARY KEY(id)
)

-- View the table entries    
SELECT * FROM notes

