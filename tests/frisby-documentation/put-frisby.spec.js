const frisby = require('frisby');

it ('POST should return a status of 200 OK', function () {
  return frisby
    .put('http://api.example.com/posts/1', {
      title: 'My Updated Title',
      content: '<p>Some different content actually</p>'
    })
    .expect('status', 200);
});