const frisby = require('frisby');

let token;

describe('Requisições PATCH com Frisby', () => {

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
            .setup({
                request: {
                    headers: {
                        // 'Authorization': 'Basic ' + Buffer.from("admin:password123").toString('base64')
                        'cookie': `token=${token}`
                    }
                }
            })
            .patch('https://restful-booker.herokuapp.com/booking/2', {
                firstname: "Joe",
                lastname: "Satriani",
            })
            .inspectJSON()
            .expect('status', 200);
    });
});
