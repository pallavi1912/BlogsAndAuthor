'use strict';
module.exports=[
'$q',
'HttpService',
'API',
function($q,HttpService,API){
	var blogList=[];
	function getBlogList(){
		var deffered= $q.defer(),
		obj={
			method:'GET',
			url:API.blogs
		}
		HttpService.apiRequest(obj)
		 .then(function(data){
		 	blogList=data;
		 	deffered.resolve(data);
		 	console.log("blogList",data);
		 },function(error){
            deffered.reject(error);
		 });
		 return deffered.promise;
	}
	getBlogList();
}]