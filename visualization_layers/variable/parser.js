/**
 * Created by ahmed khaled
 */
// and fix the issue with double quoted values
var fs = require("fs");
var globals = require('../Globals');
var filename = '../../helpers/input_files/cars.csv';
var input = require('../algebra/Algebra_InputData');
// Asynchronous read

var parser = function () {

    this.csvTojs = function (csv) {
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {
            var obj = {};

            var row = lines[i],
                queryIdx = 0,
                startValueIdx = 0,
                idx = 0;

            if (row.trim() === '') {
                continue;
            }

            while (idx < row.length) {
                /* if we meet a double quote we skip until the next one */
                var c = row[idx];

                if (c === '"') {
                    do {
                        c = row[++idx];
                    } while (c !== '"' && idx < row.length - 1);
                }

                if (c === ',' || /* handle end of line with no comma */ idx === row.length - 1) {
                    /* we've got a value */
                    var value = row.substr(startValueIdx, idx - startValueIdx).trim();

                    /* skip first double quote */
                    if (value[0] === '"') {
                        value = value.substr(1);
                    }
                    /* skip last comma */
                    if (value[value.length - 1] === ',') {
                        value = value.substr(0, value.length - 1);
                    }
                    /* skip last double quote */
                    if (value[value.length - 1] === '"') {
                        value = value.substr(0, value.length - 1);
                    }

                    var key = headers[queryIdx++];
                    obj[key] = value;
                    startValueIdx = idx + 1;
                }

                ++idx;
            }

            result.push(obj);
        }
        return result;
    };

    this.ReadFile = function (filename) {
        // Test case
        var this_class = this;
        fs.readFile(filename, function (err, data) {
            if (err) {
                return console.error(err);
            }
            this_class.SetInputData(this_class.csvTojs(data.toString()));
            input.PassToAlgebra(this_class.GetInputData());
        });
    };

    this.SetInputData = function (parsedCSV) {
        globals.user_input = parsedCSV;
    };

    this.GetInputData = function () {
      return globals.user_input;
    };
};

module.exports = new parser();


