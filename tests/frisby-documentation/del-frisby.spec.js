const frisby = require('frisby');

it('DELETE should return a status of 204 No Content', function () {
    return frisby
        .del('http://api.example.com/posts/1')
        .expect('status', 204);
});