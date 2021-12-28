const frisby = require('frisby');

describe('Requisições POST com Frisby', () => {

  it('POST deve criar um usuário', function () {
    return frisby
      .post('https://reqres.in/api/users', {
        name: 'Joe Satrinai',
        job: 'Guitarrist'
      })
      .inspectJSON()
      .expect('status', 201)      
  });
});

