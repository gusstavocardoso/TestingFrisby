const frisby = require('frisby');

it('should have a "Host" header with a value of "httpbin.org"', function () {
    return frisby
        .get('https://httpbin.org/headers')
        .expect('json', 'headers', {
            Host: 'httpbin.org'
        });
});