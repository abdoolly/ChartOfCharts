/**
 * Created by elgenius on 11/29/16.
 */
var globals = require('../Globals');

var Algebra_InputData = {
    /**
     * This Class is meant to take input from the previous layer and start the algebraical processing on it.
     */

    PassToAlgebra : function (table) {
        console.log(Object.keys(table[0]));
    }
};

module.exports = Algebra_InputData;