'use strict';
module.exports=angular.module('Common',[])
    .config(['$stateProvider' , '$urlRouteProvider',function($stateProvider , $urlRouteProvider) {
    	$stateProvider
    	   .state('app',{
    	   	url:"/app",
    	   	abstract:true,
    	   	template: require('./templates/header.html')
    	   })
    	   .state('app.dashboard',{
    	   	url:"/dashboard",
    	   	template: '<h1>Welcome</h1>'
    	   })
    }]);