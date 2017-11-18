"use strict"; 

app.controller("WishlistCtrl", function($rootScope, $location, $scope, MovieService){
    $scope.movies = [];     
    
    const getMovies = () => {
        MovieService.getWishlistMovies($rootScope.uid).then((results) => {
            $scope.movies = results;
     
        }).catch((err) => {
            console.log(err); 
        }); 
    }; 

    getMovies(); 

    $scope.deleteMovie = (movieId) => {
        MovieService.deleteMovie(movieId).then((result) => {
            getMovies();  
        }).catch((err) => {
            console.log(err); 
        });
    };

    $scope.switchWatched = (movie) => {
        movie.isWatched = true;
        let updatedMovie = MovieService.createMovieObject(movie);
        MovieService.updateMovie(updatedMovie, movie.id).then((result) => {
            console.log(result); 
            getMovies(); 
        }).catch((err) => {
            console.log(err); 
        });
    };

    $scope.movieDetail = (movieId) => {
        $location.path(`/movie/${movieId}`); 
    };

});  