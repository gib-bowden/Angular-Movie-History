"use strict"; 

app.controller("SearchCtrl", function($location, $rootScope, $scope, MovieService, tmdbService){
    $scope.movies = []; 

    const createMovie = (movie) => {
        return {
        "title": movie.title,
        "overview": movie.overview,
        "poster_path": movie.poster_path,
        "rating": null,
        "isWatched": true,
        "uid": $rootScope.uid
        };
    };
    
    $scope.enterPush = (e) => {
        if (e.keyCode === 13) {
            tmdbService.searchMovies(e.target.value).then((results) => {
                $scope.movies = results.data.results;
            }).catch((err) => {
                console.log(err); 
            });
        }
    }; 

    $scope.saveRated = (tmdbMovie) => {
        let newMovie = createMovie(tmdbMovie);
        MovieService.postNewMovie(newMovie).then(() => {
            $location.path('/rated');
        }).catch((err) => {
            console.log(err);
        });        
    };
}); 