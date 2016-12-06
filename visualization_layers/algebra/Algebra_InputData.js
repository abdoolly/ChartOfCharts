/**
 * Created by elgenius on 11/29/16.
 */
var globals = require('../Globals');
var utils = require('../../helpers/Utils');
var async = require('async');
var op = require('./Algebra_Operators');

var Algebra_InputData = {
    /**
     * This Class is meant to take input from the previous layer and start the algebraical processing on it.
     */
    table: [],
    keys: [],
    key_types: [],
    table_size: 0,

    PassToAlgebra: function (table) {
        globals.table = table;
        this.table = table;
        this.SetSize();
        this.keys = utils.GetTableKeys(this.GetTable());
        this.IdentifyKeyTypes();
        globals.key_types = this.key_types;
        var operator = new op();
        operator.cross('number','year');
    },

    IdentifyKeyTypes: function () {
        var table = this.GetTable();
        var this_class = this;
        async.each(this.keys, function (key) {
            var data_obj = {};
            async.each(table, function (item) {
                var value = item[key];
                data_obj[value] = 1;
            });
            this_class.CalculateKeyType(Object.keys(data_obj).length, key, this_class);
        });
    },

    CalculateKeyType: function (repeated_size, key, classObj) {
        var table_size = classObj.GetTableSize();
        // if repeated is 40% or less of the table_size then it's categorical
        var percentage = (repeated_size / table_size) * 100;
        if (percentage <= 50) {
            if (classObj.GetColumnType(key) == 'number') {
                classObj.key_types[key] = globals.ORDINAL;
            } else
                classObj.key_types[key] = globals.CATEGORICAL;
        } else
            classObj.key_types[key] = globals.NUMERICAL;
    },

    /**
     * @return {string}
     */
    GetColumnType: function (key) {
        var table = this.GetTable();
        var data_type = {};
        var type;
        if (table.length >= 1) {
            for (var i = 0; i < 3; i++) {
                data_type[typeof table[i][key]] = 1;
                type = typeof table[i][key];
            }
        }

        if (Object.keys(data_type).length == 1) {
            return type.toString();
        } else {
            return 'string';
        }
    },

    GetTable: function () {
        return globals.table;
    },

    SetSize: function () {
        var table = this.GetTable();
        if (table.length >= 1) {
            this.table_size = table.length
        } else if (table.length == 0) {
            throw "This is an empty object";
        } else {
            this.table_size = 1;
        }
    },

    /**
     * @return {number}
     */
    GetTableSize: function () {
        return this.table_size;
    }

};

module.exports = Algebra_InputData;