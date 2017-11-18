"use strict"; 

app.controller("SearchCtrl", function($location, $rootScope, $scope, MovieService, tmdbService){
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

    $scope.saveRated = (tmdbMovie) => {
        tmdbMovie.uid = $rootScope.uid;
        tmdbMovie.isWatched = true;
        tmdbMovie.rating = null; 
        let newMovie = MovieService.createMovieObject(tmdbMovie);
        MovieService.postNewMovie(newMovie).then(() => {
            $location.path('/rated');
        }).catch((err) => {
            console.log(err);
        });        
    };

    $scope.saveWishlist = (tmdbMovie) => {
        tmdbMovie.uid = $rootScope.uid;
        tmdbMovie.isWatched = false;
        tmdbMovie.rating = null; 
        let newMovie = MovieService.createMovieObject(tmdbMovie);
        MovieService.postNewMovie(newMovie).then(() => {
            $location.path('/wishlist');
        }).catch((err) => {
            console.log(err);
        });        
    };
}); 