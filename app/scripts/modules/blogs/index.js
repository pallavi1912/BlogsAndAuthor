'use strict';
module.exports=angular.module('Blogs',[])
    .config(['$stateProvider' , '$urlRouterProvider',function($stateProvider , $urlRouterProvider) {
    	$stateProvider
    	   .state('app.blogList',{
    	   	url:"^/blogList",
            moduleName:'blogs',
    	   	template: require('./templates/blogList.html')
    	   }),
    	  resolve: {
          blogList: ['$q', 'blogListService', function($q, blogListService) {
            var deffered = $q.defer();
            blogListService.getBlogList()
              .then(function(data) {
                deffered.resolve(data);
              }, function(error) {
                deffered.reject(error);
                console.log("in error", error);
              });

            return deffered.promise;
          }]
        }
    }])
    .service('blogListService',require('./services/blog-list-service.js'))
    .directive('blogListDirective',require('./directives/blogListDirective.js'));
