var app = angular.module('calApp', []);

app.controller('CalCtrl', [
    '$scope',
    function($scope){
        $scope.protein = 0;
        $scope.carb = 0;
        $scope.fat = 0;
        $scope.calories = 0;

        $scope.calculate = function(){

            $scope.calories = ($scope.protein*4)+($scope.carb*4)+($scope.fat*9);
        }

    }]);
