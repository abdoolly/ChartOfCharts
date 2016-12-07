/**
 * Created by elgenius on 11/29/16.
 */

var globals = require('../Globals');

var Algebra_Operators = function (table) {

    /**
     * class properties
     */
    if (table != null)
        this.table = table;
    else
        this.table = globals.table;

    this.key_types = globals.key_types;

    /**
     * class methods
     */

    // solve this
    // https://10xrecruit.kattis.com/problems/catvsdog
    /**
     * @params
     * takes as many parameters as you give
     * parameters entered should exist in the table of the class
     * you can either pass it in the constructor
     * or set the table with the SetWorkOnTable function
     * @returns Crossed Object
     */
    this.cross = function () {
        var table_keys = {};
        for (var i = 0; i < arguments.length; i++) {
            table_keys[arguments[i]] = [];
        }
        var columns = Object.keys(table_keys);

        var crossingAction = "";
        columns.forEach(function (value, index) {
            crossingAction += 'table_keys[columns[' + index + ']].push(table[index][columns[' + index + ']]);';
        });

        var table = this.table;
        this.table.forEach(function (value, index) {
            eval(crossingAction);
        });

        // console.log(table_keys);
        return table_keys;
    };

    this.nest = function () {

    };

    this.blend = function () {
        var table_keys = this.cross.apply(this, arguments);

        var main_array = [];
        for (var i = 0; i < arguments.length; i++)
            main_array = main_array.concat(table_keys[arguments[i]]);

        console.log(main_array);
        return main_array;
    };

    this.SetWorkOnTable = function (table) {
        this.table = table;
    }

};

module.exports = Algebra_Operators;