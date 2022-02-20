const frisby = require('frisby');

describe('Requisições GET com Frisby', () => {
    it('GET deve retornar todos os usuários', function () {
        return frisby
            .get('https://reqres.in/api/users', {
                page: "2"
            })
            .inspectJSON()
            .inspectStatus()
            .expect('status', 200)
            .expect('json', 'data', [], {
                id: 1,
                email: "george.bluth@reqres.in",
                first_name: "George",
                last_name: "Bluth",
                avatar: "https://reqres.in/img/faces/1-image.jpg"
            })
    });

    it('GET deve retornar um usuário pelo id', function () {
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



