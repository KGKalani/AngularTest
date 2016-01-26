app.controller('MainController', ['$scope', function($scope) {

  $scope.move = {
    icon: 'img/img4.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/img5.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/img6.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };
}]);