'use strict';
module.exports=angular.module('Common',[])
    .config(['$stateProvider' , '$urlRouterProvider',function($stateProvider , $urlRouterProvider) {
    	$stateProvider
    	   .state('app',{
    	   	url:"/app",
    	   	abstract:true,
            controller:'headerController as vm',
    	   	template: require('./templates/header.html')
    	   })
    	   .state('app.dashboard',{
    	   	url:"^/dashboard",
    	   	template: '<h1>Welcome</h1>'
    	   })
    }])
    .controller('headerController',require('./controllers/headerController.js'));