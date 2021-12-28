const frisby = require('frisby');

let token;

describe('Requisições PUT com Frisby', () => {

    it('Deve gerar o token do usuario', function () {
        return frisby
            .post('https://restful-booker.herokuapp.com/auth', {
                "username": "admin",
                "password": "password123"
            })
            .expect('status', 200)
            .then(function (res) {
                token = res.json.token;
                console.log(token);
            });

    });

    it('Deve atualizar um livro', function () {
        return frisby
            .setup({
                request: {
                    headers: {
                        // 'Authorization': 'Basic ' + Buffer.from("admin:password123").toString('base64')
                        'cookie': `token=${token}`
                    }
                }
            })
            .put('https://restful-booker.herokuapp.com/booking/2', {
                firstname: "Steve",
                lastname: "Vai",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                },
                additionalneeds: "Breakfast"
            })
            .inspectJSON()
            .expect('status', 200);
    });
});
