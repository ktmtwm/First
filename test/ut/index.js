var mocha = require('mocha');

mocha.addFile("D:/projects/JenkTest/test/ut/Jenktest.js");

var runner = mocha.run(function () {
    console.log('finished');
});

runner.on('pass', function (test) {
    console.log('... %s passed', test.title);
});

runner.on('fail', function (test) {
    console.log('... %s failed', test.title);
});