/**
 * Created by elgenius on 11/30/16.
 */

var input = require('./../../visualization_layers/algebra/Algebra_InputData');

var Trial = {
    tables: {
        population: [
            {number: 1000, city_id: 1, year: 1980},
            {number: 2000, city_id: 2, year: 1980},
            {number: 3000, city_id: 3, year: 1980},
            {number: 4000, city_id: 4, year: 1980},
            {number: 5000, city_id: 5, year: 1980},
            {number: 1200, city_id: 6, year: 2000},
            {number: 2300, city_id: 7, year: 2000},
            {number: 3400, city_id: 8, year: 2000},
            {number: 4500, city_id: 9, year: 2000},
            {number: 5600, city_id: 10, year: 2000}
        ],
        city: [
            {name: "new york", section: "USA"},
            {name: "LA", section: "USA"},
            {name: "chicago", section: "USA"},
            {name: "melbourne", section: "USA"},
            {name: "moscow", section: "USA"},
            {name: "berlin", section: "world"},
            {name: "paris", section: "world"},
            {name: "london", section: "world"},
            {name: "toronto", section: "world"},
            {name: "manila", section: "world"}
        ]
    }

    /**
     * city         id
     * new_york     1
     * LA           2
     * chicago      3
     * melbourne    4
     * moscow       5
     * berlin       6
     * paris        7
     * london       8
     * toronto      9
     * manila       10
     */
};

module.exports = Trial;

