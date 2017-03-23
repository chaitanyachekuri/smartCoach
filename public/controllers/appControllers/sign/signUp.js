/**
 * Created by cskcv on 3/22/2017.
 */

app.controller("signUpController", ['$scope', '$http', function ($scope, $http) {

    $scope.personalDetails = {
        email: "",
        password: "",
        userName: "",
        firstName: "",
        lastName: "",
        phone: "",
        type: ""
    };


    $scope.onSubmit = ()=>{

        console.log( $scope.personalDetails);

        $http.post('api/signup', {personalDetails: $scope.personalDetails})
            .success((results)=>{
              console.log("success");
            })
            .error((error)=>{
               console.log("error "+error);
            });

    }
}]);