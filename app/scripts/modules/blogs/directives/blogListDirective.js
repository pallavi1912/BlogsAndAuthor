'use strict';

module.exports = [function() {
    return {
        restrict: 'AE',
        template: require('../templates/blog-list-directive.html'),
        scope: {
            blogList: '='
        },
        link: function(scope, elem, attrs) {},
        controller: ['$scope', function($scope) {
            var vm = this;

            vm.blogList = $scope.blogList;
        }],
        controllerAs: 'vm'
    };
}];
