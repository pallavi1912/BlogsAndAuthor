'use strict';
/**
 * @memberof User
 * @ngdoc controller
 * @name AbstractController
 * @param {service} $scope Angular scope 
 * @param {service} $state Angular state 
 * @param {Object} blogList User Information recieves from resolve
 */
module.exports = [
  '$scope',
  '$state',
  'blogList',
  'blogListService',
  function($scope, $state, blogList, blogListService) {
    var vm = this;
    /**
     * @memberof AbstractController
     * @method init
     * @description 
     *     This function will executes at first whenever useblogListServicer enters in this controller.
     */
    function init() {
     
      vm.blogList = blogList.data;
      console.log("blog info", vm.blogList[0].authorfirstname);
    }
    init();
   
    
  }
];
