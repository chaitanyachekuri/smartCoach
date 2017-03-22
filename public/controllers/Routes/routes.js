
app.config(function($routeProvider){

    $routeProvider
        .when('/',{
        templateUrl: 'views/start.html',
        controller: 'startController'})
        .when('/admin', {
        templateUrl: 'views/admin/adminHome.html',
        controller: 'adminHomeController'
        })
        .when('/admin/signup', {
           templateUrl: 'views/signUp/signUp.html',
            controller: 'signUpController'
        });

});