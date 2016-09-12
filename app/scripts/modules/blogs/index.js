'use strict';
module.exports=angular.module('Blogs',[])
    .config(['$stateProvider' , '$urlRouterProvider',function($stateProvider , $urlRouterProvider) {
    	$stateProvider
    	   .state('app.blogList',{
    	   	url:"^/blogList",
            moduleName:'blogs',
    	   	template: require('./templates/blogList.html')
    	   })
    }])
    .service('blogListService',require('./services/blog-list-service.js'))
    .directive('blogListDirective',require('./directives/blogListDirective.js'));
