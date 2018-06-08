var orm = require('../config/orm');

var burger = {

    all: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    
    create: function(name, devoured, cb) {
        orm.insertOne(name, devoured, function(res) {
            cb(res);
        });
    },

    update: function(name, cb) {
        orm.updateOne(name, function(res) {
            cb(res);
        });
    }
  
}

module.exports = burger;