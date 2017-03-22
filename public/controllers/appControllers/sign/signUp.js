/**
 * Created by cskcv on 3/22/2017.
 */

app.controller("signUpController", ['$scope', '$http', function ($scope, $http) {

    $scope.adminPersonalDetails = {
        email: "",
        password: "",
        userName: "",
        firstName: "",
        lastName: "cs",
        phone: ""
    };

    $scope.adminSubmit = ()=>{
        $http.post('api/admin/signup', {adminPersonalDetails: $scope.adminPersonalDetails})
            .success((results)=>{
              console.log("success");
            })
            .error((error)=>{
               console.log("error "+error);
            });

    }
}]);