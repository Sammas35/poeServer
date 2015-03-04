// Karma configuration
// Generated on Tue Feb 10 2015 11:45:09 GMT+0100 (Mitteleuropäische Zeit)

module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            'app/bower_components/lodash/lodash.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/modules/app.js',
            'app/scripts/modules/**/*.module.js',
            'app/scripts/modules/**/*.js',
            'test/unit/**/*Spec.js'
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['PhantomJS', 'Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],

        singleRun: false
    });
};
