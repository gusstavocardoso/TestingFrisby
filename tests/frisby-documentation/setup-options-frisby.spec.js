const frisby = require('frisby');

// The 'setup' function only affects a single test
it ('runs setup only for a single test', function () {
  return frisby
    .setup({
      request: {
        headers: {
          'Authorization': 'Basic ' + Buffer.from("username:password").toString('base64')
        }
      }
    })
    .get('http://api.example.com')
    .expect('status', 200);
});