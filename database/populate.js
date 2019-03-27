const faker = require('faker');
const fs = require('fs');
const str = "";
function headerBlock() {
  let data = [];
  let count = 0;
  let rentals = ['Entire Place', 'Private Room', 'Shared Room'];
  let host = Math.floor((Math.random() * 1) + 1)
  for (let i = 0; i < 100; i++) {
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

let header = new headerBlock()
console.log(Object.values(header))

fs.writeFile('/Users/beverly/Documents/GitHub/header-service/database/data.txt',JSON.stringify(data),function(err) { 
  if(err) return console.log(err); else console.log('file saved')
});