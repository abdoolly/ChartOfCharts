/**
 * Created by elgenius on 11/30/16.
 */
var db = require('./db');

exports.create_population = function (number, city_id, year, done) {
    var values = [number, city_id, year, new Date().toISOString()];

    db.get().query('INSERT INTO population (number, city_id, year) VALUES(?, ?, ?)', values, function (err, result) {
        if (err) return done(err);
        done(null, result.insertId)
    })
};

exports.getAll = function (done) {
    db.get().query('SELECT * FROM population', function (err, rows) {
        if (err) return done(err);
        done(null, rows)
    });
};

exports.getAllByUser = function (year, done) {
    db.get().query('SELECT * FROM population WHERE year = ?', year, function (err, rows) {
        if (err) return done(err);
        done(null, rows)
    })
};

/**
 * @return {string}
 */
exports.SeedDB =  function (tables,done) {
  db.fixtures(tables,done);
};