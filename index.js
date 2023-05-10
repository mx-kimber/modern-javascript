/* global moment */
var moment = require('moment'); // require
moment().format();

console.log('hello!');

console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

const { sqrt } = require('mathjs');
console.log(sqrt(-4).toString());

const { simplify, parse, derivative } = require('mathjs');
console.log(simplify('2x + 3x').toString());
