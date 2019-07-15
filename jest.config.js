// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  // Indicates whether the coverage information should be collected while executing the test
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: null,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  collectCoverageFrom : [
    "src/**/*.{js,jsx,tsx,ts}", 
    "!**/node_modules/**", 
    "!**/vendor/**"
  ],
  coverageReporters: [
    "json", 
    "lcov"
  ]
};
