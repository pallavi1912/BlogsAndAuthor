'use strict';
module.exports=angular.module('Common',[])
    .config(['$stateProvider' , '$urlRouterProvider',function($stateProvider , $urlRouterProvider) {
    	$stateProvider
    	   .state('app',{
    	   	url:"/app",
    	   	abstract:true,
    	   	template: require('./templates/header.html')
    	   })
    	   .state('app.dashboard',{
    	   	url:"^/dashboard",
    	   	template: '<h1>Welcome</h1>'
    	   })
    }]);