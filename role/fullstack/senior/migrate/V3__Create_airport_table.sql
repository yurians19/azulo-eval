-- Creacion de la tabla airport
create table airport (
  id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(20),
  AirportOperatorId varchar(20),
  AirportCode varchar(20),
  LocationId varchar(20),
  PriorityOrder varchar(20)
);