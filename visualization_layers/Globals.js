/**
 * This Global class is implemented using a singleton design pattern
 * @returns {{user_input: string, CATEGORICAL: string, NUMERICAL: string, ORDINAL: string}}
 * @constructor
 */

var Globals = function () {

    /**
     * This class will have properties will we need to use while passing through out the layers
     */
    this.user_input = "";
    this.CATEGORICAL = "categorical";
    this.NUMERICAL = "numerical";
    this.ORDINAL = "ORDINAL";
    this.table = [];
    this.key_types = [];
    this.last_callback = ""; // this will  send the response to the user at the end of all callbacks

};

var obj = null;
var getInstance = function () {
    if (obj == null) {
        obj = new Globals();
        return obj;
    } else {
        return obj;
    }
};

module.exports = getInstance();