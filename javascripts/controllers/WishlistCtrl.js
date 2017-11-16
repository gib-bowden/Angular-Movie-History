"use strict"; 

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){
    $scope.movies = [];     
    MovieService.getWishlistMovies($rootScope.uid).then((results) => {
        $scope.movies = results;
        console.log(results);   
    }).catch((err) => {
        console.log(err); 
    }); 
}); 