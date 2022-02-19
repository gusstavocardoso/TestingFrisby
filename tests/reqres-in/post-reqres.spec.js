const frisby = require('frisby');

import User from '../../model/user.js'

describe('Requisições POST com Frisby', () => {

  it('POST deve criar um usuário', function () {
    return frisby
      .post('https://reqres.in/api/users', User.createUser())
      .inspectJSON()
      .expect('status', 201)      
  });
});

