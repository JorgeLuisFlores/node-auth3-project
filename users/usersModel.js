const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findDepartment,
};

function find() {
    return db('users').select('id', 'username', 'department');
}

function findDepartment(department) {
    if (department) {
        return db("users")
            .where("department", department)
    } else {
        return null;
    };
};




function findBy(filter) {
    console.log(filter);
    return db('users')
        .select('id', 'username', 'password', 'department')
        .where(filter);

    /*
    SELECT id, username, password
    FROM users 
    WHERE username = 'sk4'
    */
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db('users')
        .select('id', 'username', 'department')
        .where({
            id
        })
        .first();
}