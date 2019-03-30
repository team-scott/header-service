const sqlite3 = require('sqlite3').verbose();
const faker = require('faker');

let db = new sqlite3.Database('./headers.db', (error) => {
  if(error) {
    console.log('Error connecting to database.');
  } else {
    console.log('Connected to database.');
  }
})

  let descriptionQuery = `INSERT INTO rentals(rentalID,listingTitle,listingArea,rentalType,
    rentalCapacity,rentalBedrooms,rentalBeds,rentalBaths,rentalDescription,userFeedback,
    hostStatus,hostName,hostAvatarUrl) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  let photoQuery = `INSERT INTO photos(photoID,photoUrl,rentalID) VALUES (?,?,?)`;
  db.serialize((err) => {
    if(err) {
      console.log(err);
    }
    let headerCount = 1;
    let photoCount = 1;
    let pCount = 1;
    let types = ['Entire Place', 'Private Room', 'Shared Room'];
    let placeholder = '';
    let photoStatement = db.prepare(photoQuery);
    let headerStatement = db.prepare(descriptionQuery);
    for (let i = 0; i < 100; i++) {
      headerStatement.run(headerCount,
        faker.lorem.words((Math.floor(Math.random() * 5) + 1)),
        faker.address.city(),
        types[Math.floor(Math.random() * 3)],
        Math.floor((Math.random() * 6) + 1),
        Math.floor((Math.random() * 6) + 1),
        Math.floor((Math.random() * 6) + 1),
        Math.floor((Math.random() * 3) + 1),
        faker.lorem.paragraphs(3),
        faker.lorem.words(6),
        faker.random.boolean(),
        faker.name.findName(),
        faker.image.avatar(),
        );
        headerCount++;;
      }
        for (let x = 0; x < 500; x++) {
          photoStatement.run(
            photoCount,
            `https://s3.us-east-2.amazonaws.com/hrnyc21fec-scott-howard/photo${pCount}.jpg`,
            Math.floor(Math.random() * 100)
            )
            photoCount++;
            pCount++;
            if(pCount >= 50) {
              pCount = 1;
            };
          }
    headerStatement.finalize((err) => {
      if(err) {
        console.log(err);
      }
    });
    photoStatement.finalize((err) => {
      if(err) {
        console.log(err);
      }
    });
  })

  db.close((err) => {
    if (err) {
      console.log(err);
    }
  })

module.export = db;