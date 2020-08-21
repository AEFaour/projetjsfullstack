use dorancoformation;
CREATE TABLE stagiaires (
  id_stagaires INT(3) NOT NULL AUTO_INCREMENT,
  prenom VARCHAR(20) NOT NULL,
  nom VARCHAR(20) NOT NULL,
  sexe ENUM('m','f') NOT NULL,
  formation VARCHAR(30) NOT NULL,
  date_inscription DATE NOT NULL,
  frais_dossier INT(3) NOT NULL,
  PRIMARY KEY (id_stagaires)
) ENGINE=InnoDB ;

INSERT INTO stagiaires (id_stagaires, prenom, nom, sexe, formation, date_inscription, frais_dossier) VALUES
(101, 'Paul', 'Petit', 'm', 'Javascript', '2020-05-26', 6000),
(102, 'Florent', 'Lafon', 'm', 'Phyton', '2020-05-25', 6000),
(103, 'Julien', 'Boyer', 'm', 'Phyton', '2020-06-01', 3000),
(104, 'Emilie', 'Defrance', 'f', 'CSharp', '2020-05-25', 6000),
(105, 'Nathalie', 'Deutch', 'f', 'PHP', '2020-05-26', 6000),
(106, 'Emmanuel', 'Xavier', 'm', 'Java', '2020-05-30', 3000),
(107, 'Marie-Laure', 'Flury', 'f', 'Java', '2020-05-25', 3000),
(108, 'Rose', 'Ruber', 'f', 'Javasript', '2020-05-27', 6000),
(109, 'Alexandre', 'Lethomas', 'm', 'CSharp', '2020-05-25', 6000),
(110, 'Emma', 'Coq', 'f', 'CSharp', '2020-05-29', 3000),
(111, 'Xavier', 'Grand', 'm', 'Typescript', '2020-05-29', 3000),
(112, 'Adam', 'Berger', 'm', 'PHP', '2020-06-01', 6000),
(113, 'Nicolas', 'Leonard', 'm', 'PHP', '2020-05-27', 6000),
(114, 'Celine', 'Popars', 'f', 'Javasript', '2020-05-30', 6000),
(115, 'Jean', 'Menetrier', 'm', 'Javasript', '2020-06-01', 3000),
(116, 'Olivier', 'Rivron', 'm', 'Phyton', '2020-05-30', 6000),
(117, 'Natacha', 'Malakova', 'f', 'Typescript', '2020-05-27', 6000),
(118, 'Martin', 'Sebban', 'm', 'CPlusPlus', '2020-05-30', 3000),
(119, 'Choe', 'Bitaud', 'f', 'Typescript', '2020-05-25', 6000),
(120, 'Martine', 'Tourette', 'f', 'Javasript', '2020-06-01', 3000);