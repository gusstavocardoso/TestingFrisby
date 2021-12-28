const frisby = require('frisby');

it ('POST should return a status of 201 Created', function () {
  return frisby
    .post('http://api.example.com/posts', {
      title: 'My New Blog Post',
      content: '<p>A cool blog post!</p>'
    })
    .expect('status', 201);
});