const db = require("../config/dbConfig.js");

module.exports = function(dbName) {
    
    function findAll() {
        return db(dbName);
    }

    function findById(id) {
        return db(dbName).where({id}).first();
    }

    function add(item) {
        return db(dbName).insert(item, "id").then(([id]) => {
            return findById(id);
        });
    }

    function update(id, changes) {
        return db(dbName).where({id}).update(changes).then(
            count => {
                if (count > 0) return findById(id);
                if (count < 0) return null;
            }
        );
    }

    function remove(id) {
        return db(dbName).where({id}).del();
    }

    return {
        findAll,
        findById,
        update,
        add,
        remove
    };
}
