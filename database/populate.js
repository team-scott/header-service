const faker = require('faker');
const sqlite3 = require('sqlite3').verbose();

// seed script
function headerBlock() {
  let data = [];
  let count = 0;
  let rentals = ['Entire Place', 'Private Room', 'Shared Room'];
  let host = Math.floor((Math.random() * 1) + 1)
  for (let i = 0; i < 99; i++) {
    let current = {
      id: count,
      listingTitle: faker.lorem.words((Math.floor(Math.random() * 5) + 1)),
      listingArea: faker.address.city(),
      rentalType: rentals[Math.floor(Math.random() * 3)],
      rentalCapacity: Math.floor((Math.random() * 6) + 1),
      rentalBedrooms: Math.floor((Math.random() * 6) + 1),
      rentalBeds: Math.floor((Math.random() * 6) + 1),
      rentalBaths: Math.floor((Math.random() * 3) +1 ),
      rentalDescription: faker.lorem.paragraphs(3),
      userFeedback: faker.lorem.words(6),
      hostStatus: host,
      hostName: faker.name.findName(),
      hostAvatarUrl: faker.image.avatar()
    }
    console.log(current)
    data.push(current);
    count++;
  }
}

let db = new sqlite3.Database('./headers.db', (error) => {
  if(error) {
    console.log('Error connecting to database.');
  } else {
    console.log('Connected to database.');
  }
})

db.run(`INSERT INTO (rentalID,listingTitle,listingArea,rentalType,
  rentalCapacity,rentalBedrooms,rentalBeds,rentalBaths,rentalDescription,userFeedback,
  hostStatus,hostName,hostAvatarUrl,photoID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
db.run(`INSERT INTO (photoID,photoUrl,rentalID) VALUES (?,?,?)`);