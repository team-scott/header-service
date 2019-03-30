CREATE TABLE rentals
(
 rentalID          int NOT NULL ,
 listingTitle      varchar(256) NOT NULL ,
 listingArea       varchar(256) NOT NULL ,
 rentalType        varchar(45) NOT NULL ,
 rentalCapacity    int NOT NULL ,
 rentalBedrooms    int NOT NULL ,
 rentalBeds        int NOT NULL ,
 rentalBaths       int NOT NULL ,
 rentalDescription longtext NOT NULL ,
 userFeedback      varchar(256) NOT NULL ,
 hostStatus        varchar(256) NOT NULL ,
 hostName          varchar(45) NOT NULL,
 hostAvatarUrl     varchar(256) NOT NULL,
PRIMARY KEY (rentalID)
);


CREATE TABLE photos
(
 photoUrl varchar(256) NOT NULL ,
 rentalID  int NOT NULL ,
 photoID  varchar(256) NOT NULL ,
PRIMARY KEY (photoID)
);