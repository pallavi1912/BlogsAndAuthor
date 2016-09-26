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
  '$uibModal',
  function($scope, $state,$uibModal) {
    var vm = this;
    /**
     * @memberof AbstractController
     * @method init
     * @description 
     *     This function will executes at first whenever useblogListServicer enters in this controller.
     */
    function init() {
     
      console.log("in common page");
    }
    init();
   vm.open=function(){
    console.log("open function");
    var modalInstance= $uibModal.open({
      animation:false,
      backdrop:'static',
      templateUrl:'../templates/login.html'
    });
   };
    
  }
];
