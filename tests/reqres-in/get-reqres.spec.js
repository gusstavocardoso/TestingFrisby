const frisby = require('frisby');

describe('Requisições GET com Frisby', () => {
    it('GET should return a status of 200 OK', function () {
        return frisby
            .get('https://reqres.in/api/users', {
                page: "2"
            })
            .inspectJSON()
            .inspectStatus()
            .expect('status', 200);
    });

    it('GET should return a status of 200 OK', function () {
        return frisby
            .get('https://reqres.in/api/users?id=2')
            .inspectJSON()
            .inspectStatus()
            .expect('status', 200)
            .then(function (res) { // res = FrisbyResponse object
                let resBody = res.json['data']['email'];
                console.log(resBody);
            });
    });

});



