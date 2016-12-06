/**
 * Created by elgenius on 11/29/16.
 */

var globals = require('../Globals');

var Algebra_Operators = function () {

    /**
     * class properties
     */
    this.table = globals.table;
    this.key_types = globals.key_types;

    /**
     * class methods
     */

    this.cross = function () {
        var table_keys = {};
        for (var i = 0; i < arguments.length; i++) {
            table_keys[arguments[i]] = [];
        }
        var columns = Object.keys(table_keys);

        var crossingAction = "";
        columns.forEach(function (value, index) {
            crossingAction += 'table_keys[columns['+index+']].push(table[index][columns['+index+']]);';
        });

        var table = this.table;
        this.table.forEach(function (value, index) {
            eval(crossingAction);
        });
        return table_keys;
    };

    this.nest = function () {

    };

    this.blend = function () {

    };

};

module.exports = Algebra_Operators;