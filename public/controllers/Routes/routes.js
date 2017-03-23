
app.config(function($routeProvider){

    $routeProvider
        .when('/',{
        templateUrl: 'views/start.html',
        controller: 'startController'})

        .when('/teacher', {
        templateUrl: 'views/teacher/adminHome.html',
        controller: 'adminHomeController'
        })

        .when('/signup', {
           templateUrl: 'views/signUp/signUp.html',
            controller: 'signUpController'
        });

});