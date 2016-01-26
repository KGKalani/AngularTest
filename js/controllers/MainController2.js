app.controller('MainController2',['$scope', function($scope){
    $scope.title = "First Page";
    $scope.promo = 'The most popular books this month';
    $scope.products =
            [
              {
                name: 'The Book of Trees',
                price: 19,
                pubdate: new Date('2014', '03', '08'),
                cover: 'img/img2.jpg'
              },
              {
                name: 'Program or be Programmed',
                price: 8,
                pubdate: new Date('2013', '08', '01'),
                cover: 'img/img1.jpg'
              },
                 {
                name: 'Pollyanna',
                price: 12,
                pubdate: new Date('2010', '12', '01'),
                cover: 'img/img3.jpg'
              }

            ]

    $scope.numbers = [1,2,3,4,5,6,7,8,9];
    $scope.letters = 'abcdefghi';
    $scope.longNumber = 123453456789;
    $scope.numberLimit = 3;
    $scope.letterLimit = 4;
    $scope.longNumLimit = 5;

}]);