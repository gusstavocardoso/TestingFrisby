const frisby = require('frisby');

import Book from '../../model/book.js'

let token;

describe('Requisições PATCH com Frisby', () => {

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

    it('Deve atualizar parcialmente um livro', function () {
        return frisby
            .patch('https://restful-booker.herokuapp.com/booking/2', Book.partilUpdateBook())
            .inspectJSON()
            .expect('status', 200);
    });
});
