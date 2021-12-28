const frisby = require('frisby');

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://api.example.com/posts')
    .expect('status', 200);
    
});

