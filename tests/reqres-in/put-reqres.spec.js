const frisby = require('frisby');

import User from '../../model/user.js'

describe('Requisições PUT com Frisby', () => {
    it ('PUT deve atualizar um usuário', function () {
        return frisby
          .put('https://reqres.in/api/users/2', User.updateUser())
          .inspectJSON()
          .expect('status', 200);
      });
});
