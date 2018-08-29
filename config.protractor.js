let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/*.spec.js'],

    jasmineNodeOpts: {
        print: function() {}
     },

    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
            displayStacktrace: true
        }
        }));
  }
}