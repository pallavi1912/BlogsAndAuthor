'use strict';
module.exports=angular.module('Modules',[])
    .config(['$stateProvider' , '$urlRouterProvider',function($stateProvider , $urlRouterProvider) {
    	$stateProvider
    	   .state('app.blogList',{
    	   	url:"^/blogList",
            moduleName:'blogs',
    	   	template: require('./templates/blogList.html')
    	   })
    }]);
