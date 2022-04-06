CREATE DATABASE villainsdb;

CREATE USER 'villains'@'localhost' IDENTIFIED WITH mysql_native_password BY 'villainsPassword';

GRANT ALL ON villainsdb.* TO 'villains'@'localhost';

USE villainsdb;
CREATE TABLE villainTables(
    id INT auto_increment,
    name VARCHAR(255),
    movie VARCAHR (255),
    slug VARCAHR (255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW(),
    deletedAt DATETIME,
    PRIMARY KEY (id)
);

INSERT INTO villainTables (name, movie, slug) VALUES ('Captian Hook', 'Peter Pan', 'captian-hook');
INSERT INTO villainTables (name, movie, slug) VALUES ('Cruella de Vil', 'One Hundred and One Dalmations', 'cruella-de-vil');
INSERT INTO villainTables (name, movie, slug) VALUES ('Gaston', 'Beauty and the Beast', 'gaston');
INSERT INTO villainTables (name, movie, slug) VALUES ('Hades', 'Hercules', 'hades');
INSERT INTO villainTables (name, movie, slug) VALUES ('Horned King', 'The Black Cauldron', 'horned-king');
INSERT INTO villainTables (name, movie, slug) VALUES ('Jafar', 'Aladdin', 'jafar');
INSERT INTO villainTables (name, movie, slug) VALUES ('Lady Tremaine', 'Cinderella', 'lady-tremaine');
INSERT INTO villainTables (name, movie, slug) VALUES ('Madame Medusa', 'The Rescuers', 'madame-medusa');
INSERT INTO villainTables (name, movie, slug) VALUES ('Madam Mim', 'The Sword in the Stone', 'madam-mim');
INSERT INTO villainTables (name, movie, slug) VALUES ('Maleficent', 'Sleeping Beauty', 'maleficent');
INSERT INTO villainTables (name, movie, slug) VALUES ('Prince John', 'Robin Hood', 'prince-john');
INSERT INTO villainTables (name, movie, slug) VALUES ('Sir Hiss', 'Robin Hood', 'sir-hiss');
INSERT INTO villainTables (name, movie, slug) VALUES ('Queen Grimhilde', 'Snow White and the Seven Dwarfs', 'queen-grimhilde');
INSERT INTO villainTables (name, movie, slug) VALUES ('Queen of Hearts', 'Alice in Wonderland', 'queen-of-hearts');
INSERT INTO villainTables (name, movie, slug) VALUES ('Scar', 'The Lion King', 'Scar');
INSERT INTO villainTables (name, movie, slug) VALUES ('Shan Yu', 'Mulan', 'shan-yu');
INSERT INTO villainTables (name, movie, slug) VALUES ('Shere Khan', 'The Jungle Book', 'shere-khan');
INSERT INTO villainTables (name, movie, slug) VALUES ('Ursula', 'The Little Mermaid', 'ursula');





