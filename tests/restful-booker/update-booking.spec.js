const frisby = require('frisby');

import Book from '../../model/book.js'

let token;

describe('Requisições PUT com Frisby', () => {

    beforeEach(() => {
        frisby.globalSetup({
            request: {
                headers: {
                    'cookie': `token=${token}`
                }
            }
        });
    });

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
            .put('https://restful-booker.herokuapp.com/booking/2', Book.updateBook())
            .inspectJSON()
            .expect('status', 200)
            .expect('json', {
                firstname: "Jimi",
                lastname: "Hendrix",
                totalprice: 111,
                depositpaid: true,
                additionalneeds: "Breakfast"
            })
            .expect('json', 'bookingdates', {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            })
    });
});
