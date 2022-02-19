const frisby = require('frisby');

import Book from '../../model/book.js'

let bookId;
let token;

describe('Requisições DELETE com Frisby', () => {

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

    it('Deve cadastrar um livro', function () {
        return frisby
            .post('https://restful-booker.herokuapp.com/booking', Book.createBook())
            .inspectJSON()
            .expect('status', 200)
            .then(function (res) {
                bookId = res.json.bookingid;
                console.log(bookId);
            });
    });

    it('Deve remover um livro', function () {
        return frisby
            .del(`https://restful-booker.herokuapp.com/booking/${bookId}`)
            .expect('status', 201);
    });
});

