'use strict';
/**
 * @memberof User
 * @ngdoc controller
 * @name AbstractController
 * @param {service} $scope Angular scope 
 * @param {service} $state Angular state 
 * @param {Object} blogDetails User Information recieves from resolve
 */
module.exports = [
  '$scope',
  '$state',
  'blogDetails',
  'blogListService',
  function($scope, $state, blogDetails, blogListService) {
    var vm = this;
    /**
     * @memberof AbstractController
     * @method init
     * @description 
     *     This function will executes at first whenever useblogListServicer enters in this controller.
     */
    function init() {
     
      vm.blogDetails = blogDetails.data;
      console.log("blog info", vm.blogDetails);
    }
    init();
   
    
  }
];
