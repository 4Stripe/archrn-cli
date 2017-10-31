#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('2.0.0').description('Archtools, a set tools that will bring your react-native productivity to the next level').command('generate [name]', 'Create a new react-native component').alias('g').parse(process.argv);

console.log();
console.log(' Arch ☕ '.rainbow); // ARCH rainbow 
console.log();