/**
 * Created by elgenius on 11/30/16.
 */

var Utils = function () {

    this.GetTableKeys = function (rows) {
        if (rows.length >= 1) {
            return Object.keys(rows[0]);
        } else if (rows.length == 0) {
            throw "This is an empty object";
        } else {
            return Object.keys(rows);
        }
    };
};

module.exports = new Utils();
