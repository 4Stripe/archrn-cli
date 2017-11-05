'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _newComponent = require('./content/new-component');

var _newComponent2 = _interopRequireDefault(_newComponent);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.option('-f, --filename', 'Custom file name').parse(process.argv);

var pkgs = _commander2.default.args;

if (!pkgs.length) {
    console.error('command required');
    process.exit(1);
}

if (pkgs.length < 2) {
    console.error('command parameter required');
    process.exit(1);
}

if (pkgs[0] == 'component') {
    if (pkgs.length >= 2 && pkgs.length <= 3) {
        var stream = null;
        if (_commander2.default.filename) {
            stream = _fs2.default.createWriteStream(pkgs[2]);
        } else {
            stream = _fs2.default.createWriteStream(pkgs[1] + '.js');
        }

        stream.once('open', function (fd) {
            stream.write(_newComponent2.default.comment);
            stream.write(_newComponent2.default.head);
            stream.write('export default class ' + pkgs[1] + ' extends Component<{}> { \n                ');
            stream.write(_newComponent2.default.body);
            stream.write(_newComponent2.default.tail);

            // Close the stream
            stream.end();
        });
        if (_commander2.default.filename) {
            console.log(' ✔ NEW '.green + ('react-native component with class name ' + pkgs[1].inverse + ' is generated on ' + pkgs[2].italic + ' file'));
        } else {
            console.log(' ✔ NEW '.green + ('react-native component with class name ' + pkgs[1].inverse + ' is generated on ' + pkgs[1].italic + '.js file'));
        }
    } else {
        console.error('Invalid arguments specified');
        process.exit(1);
    }
} else {
    console.error('command parameter not found');
    process.exit(1);
}