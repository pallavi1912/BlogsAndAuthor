'use strict';
module.exports=[
'$q',
'$http',
'API',
function($q,$http,API){
	var blogList=[];
	function getBlogList(){
		var deffered= $q.defer(),
		obj={
			method:'GET',
			url:API.blogs
		}
		$http(obj)
		 .then(function(data){
		 	blogList=data;
		 	deffered.resolve(data);
		 	console.log("blogList",data);
		 },function(error){
            deffered.reject(error);
		 });
		 return deffered.promise;
	}
	return{
		getBlogList:getBlogList
	};
}];