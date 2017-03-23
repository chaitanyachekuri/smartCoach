"use strict";

app.controller('startController', ['$scope', 'communication', function($scope, comm){

    $scope.getAdmin = ()=>{
        comm.setUserType("admin");
    }



}]);