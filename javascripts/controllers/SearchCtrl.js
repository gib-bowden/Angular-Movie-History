"use strict"; 

app.controller("SearchCtrl", function($scope, tmdbService){
    $scope.movies = []; 
    
    $scope.enterPush = (e) => {
        if (e.keyCode === 13) {
            tmdbService.searchMovies(e.target.value).then((results) => {
                $scope.movies = results.data.results;
            }).catch((err) => {
                console.log(err); 
            });
        }
    }; 
}); 