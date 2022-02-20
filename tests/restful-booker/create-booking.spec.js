const frisby = require('frisby');

import Book from '../../model/book.js'

describe('Requisições POST com Frisby', () => {

    it('Deve cadastrar um livro', function () {
        return frisby
            .post('https://restful-booker.herokuapp.com/booking', Book.createBook())
            .inspectJSON()
            .expect('status', 200)
            .expect('json', 'booking', {
                firstname: "Jimi",
                lastname: "Hendrix",
                totalprice: 111,
            });
    });
});

