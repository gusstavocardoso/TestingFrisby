const frisby = require('frisby');

it('should be a teapot', function () {
    return frisby
        .get('https://httpbin.org/status/418')
        .expect('status', 418);
});