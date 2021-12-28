const frisby = require('frisby');


describe('Requisições PUT com Frisby', () => {
    it ('PUT deve atualizar um usuário', function () {
        return frisby
          .put('https://reqres.in/api/users/2', {
            name: 'Yngwie Malmsteen',
            job: 'Guitarrist'
          })
          .inspectJSON()
          .expect('status', 200);
      });
});
