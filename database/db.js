
const faker = require('faker')
let sqlite3 = require('sqlite3').verbose()
const path = require('path')
const dbPath = path.resolve(__dirname, 'schema.db')
const db = new sqlite3.Database(dbPath)

db.run(`CREATE TABLE descriptionBlock(
  rentalID INTEGER Primary key,
  listingTitle VARCHAR,
  listingArea VARCHAR,
  rentalType VARCHAR,
  rentalCapacity INTEGER,
  rentalBedrooms INTEGER,
  rentalBeds INTEGER,
  rentalBaths INTEGER,
  rentalDescription LONGTEXT,
  userFeedback VARCHAR
  hostStatus BOOLEAN,
  hostName VARCHAR,
  hostAvatarUrl VARCHARm
  photoID INTEGER,
  PRIMARY KEY(`rentalID`),
  )`);

  db.run('CREATE TABLE photos(photoID INTEGER, 
    rentalID INTEGER, 
    photoUrl VARCHAR')

for (let i = 0; i < 99; i++) {
  let entry = new Listing()
  db.run(`INSERT INTO descriptionBlock (rentalID,listingTitle,listingArea,rentalType
    ,rentalCapacity,rentalBedrooms,rentalBeds,rentalBeds,rentalBaths
    ,rentalDescription,userFeedback,hostStatus,hostAvatarUrl,photoID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,)`, Object.values(entry), (err) => {
    if (err) {
      console.log(err, 'Error adding to database.')
    } else {
      console.log('Database updated.')
    }
  })
}