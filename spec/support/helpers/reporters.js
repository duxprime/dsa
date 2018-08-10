const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter');
let jasmine = new Jasmine();
let reporter = new SpecReporter();
jasmine.addReporter(reporter);