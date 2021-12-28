const frisby = require('frisby');

describe('Requisições POST com Frisby', () => {

    it('Deve cadastrar um livro', function () {
        return frisby
            .post('https://restful-booker.herokuapp.com/booking', {
                firstname: "Jimi",
                lastname: "Hendrix",
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01"
                },
                additionalneeds: "Breakfast"
            })
            .inspectJSON()
            .expect('status', 200)
    });
});

