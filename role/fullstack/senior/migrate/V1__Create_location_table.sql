-- Creacion de la tabla location
create table location (
  id int NOT NULL AUTO_INCREMENT primary key,
  country varchar(20),
  provinceOrState varchar(20),
  longitude varchar(20),
  latitude varchar(20)
);