-- Creacion de la tabla airport
create table airport (
  id int NOT NULL AUTO_INCREMENT primary key,
  name varchar(20),
  airportOperatorId int NOT NULL,
  airportCode varchar(20),
  locationId int NOT NULL,
  priorityOrder varchar(10),
  CONSTRAINT FOREIGN KEY fk_airport_AirportOperator (airportOperatorId) REFERENCES AirportOperator(id),
  CONSTRAINT FOREIGN KEY fk_airport_location (locationId) REFERENCES location(id)
);