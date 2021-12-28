const frisby = require('frisby');

describe('Requisições GET com Frisby', () => {
    it('DELETE deve retornar status 204', function () {
        return frisby
            .del('https://reqres.in/api/users/1')
            .inspectStatus()
            .expect('status', 204);
    });
});

