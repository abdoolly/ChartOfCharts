/**
 * Created by elgenius on 11/29/16.
 */
var globals = require('../Globals');
var utils = require('../../helpers/Utils');
var async = require('async');

var Algebra_InputData = {
    /**
     * This Class is meant to take input from the previous layer and start the algebraical processing on it.
     */
    table: [],
    keys: [],
    key_types: [],
    table_size: 0,

    PassToAlgebra: function (table) {
        this.table = table;
        this.SetSize();
        this.keys = utils.GetTableKeys(this.GetTable());
        this.IdentifyKeyTypes();
    },

    IdentifyKeyTypes: function () {
        var data_obj = {};
        console.log(this.GetTableSize());
        var table = this.GetTable;
        async.each(this.keys, function (key) {
            var data_obj = {};
            async.each(table, function (item) {
                // identifying that id is a numeric
                var value = item[key];
                data_obj[value] = 1;
            });
        });
    },

    CalculateKeyType: function (repeated_size, key) {
        var table_size = this.GetTableSize();
        // if reapeated is 40% or less of the table_size then it's categorical
        var percentage = (repeated_size / table_size) * 100;
        if (percentage <= 40) {
            // case it was categorical with numerical values then it's an ordinal type
            // this.key_types[key] = globals.CATEGORICAL;
        } else
            this.key_types[key] = globals.NUMERICAL;
    },

    GetColumnType: function (key) {
        // var table = this.GetTable();
        // var data_type = {};
        // if (table.length >= 1)
        // {
        //     for (var i = 0;i < 3 ; i++)
        //     {
        //         data_type[typeof table[i][key]] = 1;
        //     }
        // }
    },

    GetTable: function () {
        return this.table;
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