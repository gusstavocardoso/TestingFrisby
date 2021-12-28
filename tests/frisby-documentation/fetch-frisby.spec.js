const frisby = require('frisby');

it ('fetch with POST should return a status of 201 Created', function () {
  return frisby
    .fetch('http://api.example.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'My Updated Title',
        content: '<p>Some different content actually</p>'
      })
    })
    .expect('status', 201);
});