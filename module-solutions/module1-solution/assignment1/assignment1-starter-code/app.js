(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunchItems = "";
    $scope.color = "black";
    $scope.inputBorder = "";

    $scope.lunchCheck = function () {
        //!!!!not counting empty array values!!!!
        let splitOnComma = $scope.lunchItems.replaceAll(' ', '').split(',')
        let filterSplitOnComma = splitOnComma.filter(function(entry) { return /\S/.test(entry); })
        console.log(splitOnComma) //check initial array
        console.log(filterSplitOnComma) // new array with empty values removed
        if ($scope.lunchItems === "") {
            $scope.message = "Please enter data first."
            $scope.messageColor = "color: red"
            $scope.inputBorder = "border: 1px solid red; transition: 1s"
        }
        else if (filterSplitOnComma.length <= 3) {
            $scope.message = "Enjoy!"
            $scope.messageColor = "color: green"
            $scope.inputBorder = "border: 1px solid green; transition: 1s"
        } else if (filterSplitOnComma.length > 3) {
            $scope.message = "Too much!"
            $scope.messageColor = "color: red"
            $scope.inputBorder = "border: 1px solid green; transition: 1s"
        }
    }
    }
}) ();