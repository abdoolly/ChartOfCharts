/**
 * Created by elgenius on 11/30/16.
 */
var trial = require('../database/seeders/Trial');
var model = require('../database/models/MainModel');
var input = require('../visualization_layers/algebra/Algebra_InputData');
var globals = require('../visualization_layers/Globals');
var op = require('../visualization_layers/algebra/Algebra_Operators');
var util = require('../helpers/Utils');
var parser = require('../visualization_layers/variable/parser');


var TestController = function () {

    this.test = function (req, res, next) {

        globals.last_callback = res;
        parser.ReadFile('../helpers/input_files/cars.csv');

        // console.log(globals.user_input);
        // model.getAll(function (x,rows) {
        // input.PassToAlgebra(rows);
        // });
        res.send('test');
    }
};

module.exports = new TestController();