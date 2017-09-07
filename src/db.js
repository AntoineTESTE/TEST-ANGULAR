const massive = require('massive');
massive({
  host: '127.0.0.1',
  port: 5432,
  database: 'messages',
  user: 'postgres',
  password: 'apppwd'
}).then(instance => {
  console.log(instance)
});