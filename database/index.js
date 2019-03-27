let knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./headers.sqlite"
  }
});

let bookshelf = require('bookshelf')(knex);

let Listing = bookshelf.Model.extend({
  tableName: Rentals
});