class Book {

    createBook() {

        const createBook = {
            firstname: "Jimi",
            lastname: "Hendrix",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }

        return createBook;
    }

    updateBook() {

        const updateBook = {
            firstname: "Jimi",
            lastname: "Hendrix",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01"
            },
            additionalneeds: "Breakfast"
        }

        return updateBook;
    }

    partilUpdateBook() {

        const partilUpdateBook = {
            firstname: "Jimi",
            lastname: "Hendrix",
            totalprice: 111
        }

        return partilUpdateBook;
    }
}

export default new Book();