# A Start from Scratch Project using React and Redux code along

Credit go to 
https://www.youtube.com/playlist?list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY

## This project is using SQL Database, which is NEW to ME!
1, to install SQL 



`
Terminal1>

brew isntall postgresql`

you need to install `homebrew` first

2, open another terminal, do the following
 
 `
 Terminal2>
 brew services start postgresql`

3, In a different terminal, 

`
Terminal1>
createdb reddice`

4, install knex

`
Terminal1>
npm install knex --save 
sudo npm install -g knex
`

5, initialized knex

`knex init`

6, open knexfilen.js

* remove everything under "development", copy and paste what's inside staging to in development
and then change the database and user information

7, install pg driver

`npm install --save pg`

8, create knex migrate users ( similar to create mongoose users)

`knex migrate:make users` 

this command create a folder called migrations and inside there is a ?_users.js file

9, open migrations/?_users.js


`
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
  	table.increments();
  	table.string('username').notNullable().unique();
  	table.string('email').notNullable().unique();
	table.string('timezone').notNullable();
	table.string('password_digest').notNullable();
	table.timestamps();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};

`

10, run migration

`
knex migrate:latest
`

11, install bookshelf

`
npm install --save bookshelf
` 

12, bookshelf.js file under server folder

`
import knex from 'knex';
import bookshelf from 'bookshelf';
import knexConfig from '../knexfile';

export default bookshelf(knex(knexConfig.development));

`

13, install bcrypt

`npm install --save bcrypt`




