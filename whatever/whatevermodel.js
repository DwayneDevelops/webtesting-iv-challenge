const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
    findById,
    update,
    remove
}

function insert(whatever) {
    return db('whatever')
    .insert(whatever, 'id')
    .then(ids => {
        return db('whatever')
        .where({ id: id[0] })
        .first()
    });
};

function getAll() {
    return db('whatever');
};

function findById(id) {
    return null;
};

async function update(id, changes) {
    return undefined;
};

function remove(id) {
    return null;
};