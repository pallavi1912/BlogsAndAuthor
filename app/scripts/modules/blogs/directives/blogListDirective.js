'use strict';

module.exports = [function() {
    return {
        restrict: 'AE',
        template: require('../templates/blog-list-directive.html'),
        scope: {
            blogDetails: '='
        },
        link: function(scope, elem, attrs) {},
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.blogDetails = $scope.blogDetails;
        }],
        controllerAs: 'vm'
    };
    console.log("blogDetails in directive",vm.blogDetails);
}];
