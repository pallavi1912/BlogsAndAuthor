'use strict';
var API = require('./config/api'),
    blogsApp=angular.module('blogsApp',[
    	require('./common').name])
    	//require('./common').name
    	/*require('./modules').name,
    	require('./shared').name])*/
    .run(['$rootScope', '$state', function($rootScope, $state){
    	console.log("in run");	
    }])
    .config(['$urlRouterProvider', 'toastrConfig', 'AppConfig',function($urlRouterProvider, toastrConfig, AppConfig){
    	angular.extend(toastrConfig, AppConfig.toastr);
    	console.log("in config");
    }]);
    function bootstrapApplication() {
     angular.element(document).ready(function() {
         angular.bootstrap(document, ["blogsApp"]);
     });
 }
 bootstrapApplication();