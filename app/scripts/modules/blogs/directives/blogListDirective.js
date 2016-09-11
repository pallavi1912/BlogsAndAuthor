'use strict';
module.exports=[function(){
	return{
	restrict:'AE',
	template:require('../templates/blogListDirective.html'),
	scope:{
	   blogList: '='
	},
    link: function(scope,elem,attrs){}
	};
}]