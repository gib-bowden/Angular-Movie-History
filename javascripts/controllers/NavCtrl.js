"use strict"; 

app.controller("NavCtrl", function($location, $rootScope, $scope, $window, AuthService){
    $scope.logoutUser = () => {
        console.log(hello);
        delete $rootScope.uid; 
        $window.localStorage.clear(); 
        AuthService.logout(); 
        $location.path('/auth'); 
    }; 
}); 