/**
 * Created by elgenius on 11/30/16.
 */
var trial = require('../database/seeders/Trial');
var model = require('../database/models/MainModel');
var input = require('../visualization_layers/algebra/Algebra_InputData');
var global = require('../visualization_layers/Globals');
var op = require('../visualization_layers/algebra/Algebra_Operators');
var util = require('../helpers/Utils');

var TestController = function(){

    this.test = function (req, res, next) {

        model.getAll(function (x,rows) {
            input.PassToAlgebra(rows);
        });
        res.send('test');
    }
};

module.exports = new TestController();