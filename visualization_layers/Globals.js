/**
 * This Global class is implemented using a singleton design pattern
 * @returns {{user_input: string, CATEGORICAL: string, NUMERICAL: string, ORDINAL: string}}
 * @constructor
 */

var Globals = function () {
    return {
        /**
         * This class will have properties will we need to use while passing through out the layers
         */
        user_input: "",
        CATEGORICAL: "categorical",
        NUMERICAL: "numerical",
        ORDINAL: "ORDINAL",
        table: []
    }
};

var obj = null;
var getInstance = function () {
    if (obj == null) {
        obj = new Globals();
        return obj;
    }else {
        return obj;
    }
};

module.exports = getInstance();