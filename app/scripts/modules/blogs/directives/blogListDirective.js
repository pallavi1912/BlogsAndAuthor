'use strict';

module.exports = [function() {
    return {
        restrict: 'AE',
        template: require('../templates/blog-list-directive.html'),
        scope: {
            blogDetails: '='
        },
        link: function(scope, elem, attrs) {},
        controller: ['$scope','$state', function($scope,$state) {
            var vm = this;

            vm.blogDetails = $scope.blogDetails;
            $scope.continueReading = function(id) {
                console.log("in continue reading",id);
                $state.go("app.blogDetails", {
                    id: id
                })
            }
        }],
        controllerAs: 'vm'
    };
    console.log("blogDetails in directive", vm.blogDetails);
}];
