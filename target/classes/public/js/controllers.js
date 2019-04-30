angular.module('app.controllers', []).controller('ShipwreckListController', function($scope, $state, popupService, $window, Shipwreck) {
  $scope.shipwrecks = Shipwreck.query(); //fetch all shipwrecks. 

  $scope.deleteShipwreck = function(shipwreck) { // Delete a Shipwreck. 
    if (popupService.showPopup('Really delete this?')) {
      shipwreck.$delete(function() {
        $scope.shipwrecks = Shipwreck.query(); 
        $state.go('shipwrecks');
      });
    }
  };
}).controller('ShipwreckViewController', function($scope, $stateParams, Shipwreck) {
  $scope.shipwreck = Shipwreck.get({ id: $stateParams.id }); 
}).controller('ShipwreckCreateController', function($scope, $state, $stateParams, Shipwreck) {
  $scope.shipwreck = new Shipwreck();  

  $scope.addShipwreck = function() { 
    $scope.shipwreck.$save(function() {
      $state.go('shipwrecks'); 
    });
  };
}).controller('ShipwreckEditController', function($scope, $state, $stateParams, Shipwreck) {
  $scope.updateShipwreck = function() { 
    $scope.shipwreck.$update(function() {
      $state.go('shipwrecks'); 
    });
  };

  $scope.loadShipwreck = function() { 
    $scope.shipwreck = Shipwreck.get({ id: $stateParams.id });
  };

  $scope.loadShipwreck(); 
});
