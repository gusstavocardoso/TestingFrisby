class User {

    createUser() {

        const createUser = {
            name: 'Joe Satrinai',
            job: 'Guitarrist'
        }

        return createUser;
    }

    updateUser() {

        const updateUser = {
            name: 'Yngwie Malmsteen',
            job: 'Guitarrist'
        }

        return updateUser;
    }
}

export default new User();