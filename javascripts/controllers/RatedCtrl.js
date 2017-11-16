"use strict"; 

app.controller("RatedCtrl", function($rootScope, $scope, MovieService){
    $scope.movies = [];  
    
    const getMovies = () => {
        MovieService.getRatedMovies($rootScope.uid).then((results) => {
            $scope.movies = results;
            console.log(results);   
        }).catch((err) => {
            console.log(err); 
        }); 
    };

    getMovies(); 

    $scope.deleteMovie = (movieId) => {
         MovieService.deleteMovie(movieId).then((result) => {
            console.log(result); 
            getMovies();  
        }).catch((err) => {
            console.log(err); 
        });
    };
}); 