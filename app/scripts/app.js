'use strict';
var API = require('./config/api'),
    blogsApp = angular.module('blogsApp', [
        'ui.router',
        'ui.bootstrap',
        'toastr',
        require('./common').name
    ])
    //require('./common').name
    /*require('./modules').name,
    require('./shared').name])*/
    .run(['$rootScope', '$state', function($rootScope, $state) {
        console.log("in run");
    }])
    .config(['$urlRouterProvider', 'toastrConfig', 'AppConfig', function($urlRouterProvider, toastrConfig, AppConfig) {
        angular.extend(toastrConfig, AppConfig.toastr);
        console.log("in config");
        $urlRouterProvider.when("", "/dashboard");
        $urlRouterProvider.when("/", "/dashboard");
    }]);

function bootstrapApplication() {
    console.log('bs');
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["blogsApp"]);
        console.log('bsd');
    });
}
bootstrapApplication();