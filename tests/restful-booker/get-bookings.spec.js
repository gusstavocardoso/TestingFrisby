const frisby = require('frisby');

describe('Requisições GET com Frisby', () => {
    
    it('Deve retornar todos o livros', function () {
        return frisby
            .get('https://restful-booker.herokuapp.com/booking')
            .inspectJSON()
            .inspectStatus()
            .expect('status', 200);
    });

    it('Deve retornar um livro pelo id', function () {
        return frisby
            .get('https://restful-booker.herokuapp.com/booking/17',)
            .inspectJSON()
            .inspectStatus()
            .expect('status', 200);
    });

});



