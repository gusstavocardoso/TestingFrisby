const frisby = require('frisby');

let bookId;
let token;

describe('Requisições DELETE com Frisby', () => {

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

    it('Deve cadastrar um livro', function () {
        return frisby
            .post('https://restful-booker.herokuapp.com/booking', {
                firstname: "Jimi",
                lastname: "Hendrix",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                },
                additionalneeds: "Breakfast"
            })
            .inspectJSON()
            .expect('status', 200)
            .then(function (res) {
                bookId = res.json.bookingid;
                console.log(bookId);
            });

    });    

    it('Deve remover um livro', function () {
        return frisby
            .setup({
                request: {
                    headers: {
                        // 'Authorization': 'Basic ' + Buffer.from("admin:password123").toString('base64')
                        'cookie': `token=${token}`
                    }
                }
            })
            .del(`https://restful-booker.herokuapp.com/booking/${bookId}`)
            .expect('status', 201);
    });
});

