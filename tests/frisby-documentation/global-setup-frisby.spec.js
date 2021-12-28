const frisby = require('frisby');

// Do setup first
frisby.globalSetup({
  request: {
    headers: {
      'Authorization': 'Basic ' + Buffer.from("username:password").toString('base64'),
      'Content-Type': 'application/json',
    }
  }
});

// Any global setup is automatically applied to every test
it ('uses globalSetup for every test after it is called', function () {
  return frisby
    .get('http://api.example.com')
    .expect('status', 200);
});