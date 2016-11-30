/**
 * Created by elgenius on 11/30/16.
 */
var trial = require('../database/seeders/Trial');
var model = require('../database/models/MainModel');
var input = require('../visualization_layers/algebra/Algebra_InputData');

var TestController = {
    test : function (req, res, next) {
        model.getById(1,function (x,rows) {
            input.PassToAlgebra(rows);
        });
        res.send('test');
    }
};

module.exports = TestController;