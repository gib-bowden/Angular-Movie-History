"use strict"; 

app.controller("RatedCtrl", function($rootScope, $location, $scope, MovieService){
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

    $scope.starChange = (event, movie) => {
        if (event.rating) {
            movie.rating = event.rating;
            let updatedMovie = MovieService.createMovieObject(movie);
            MovieService.updateMovie(updatedMovie, movie.id).then(() => {
                getMovies(); 
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    $scope.movieDetail = (movieId) => {
        $location.path(`/movie/${movieId}`); 
    };
}); 