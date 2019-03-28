const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');

let db = new sqlite3.Database('./headers.db', (error) => {
  if(error) {
    console.log('Error connecting to database.');
  } else {
    console.log('Connected to database.');
  }
})

  let descriptionQuery = `INSERT INTO (rentalID,listingTitle,listingArea,rentalType,
    rentalCapacity,rentalBedrooms,rentalBeds,rentalBaths,rentalDescription,userFeedback,
    hostStatus,hostName,hostAvatarUrl,photoID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  let photoQuery = `INSERT INTO (photoID,photoUrl,rentalID) VALUES (?,?,?)`;

  db.serialize((err) => {
    if(err) {
      console.log(err);
    }
    let headerCount = 0;
    let photoCount = 0;
    let placeholder = '';
    let host = Math.floor((Math.random() * 1) + 1);
    let headerStatement = db.prepare(descriptionQuery);
    let photoStatement = db.prepare(photoQuery);
    for (let i = 0; i < 99; i++) {
      headerStatement.run(headerCount,faker.lorem.words((
        Math.floor(Math.random() * 5) + 1)),
        faker.address.city(),
        [Math.floor(Math.random() * 3)],
        Math.floor((Math.random() * 6) + 1),
        Math.floor((Math.random() * 6) + 1),
        Math.floor((Math.random() * 6) + 1),
        Math.floor((Math.random() * 3) +1 ),
        faker.lorem.paragraphs(3),
        faker.lorem.words(6),
        host,
        faker.name.findName(),
        faker.image.avatar()
        );
        headerCount++;
      }
      for (let x = 0; x < 99; x++) {
        photoStatement.run(photoCount,placeholder,Math.floor(Math.random() * 100));
        photoCount++;
      }
    headerStatement.finalize();
    photoStatement.finalize();
  })

  db.close((err) => {
    if(err) {
      console.log(err);
    }
  });

  module.exports = db;




