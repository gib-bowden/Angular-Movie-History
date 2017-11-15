"use strict"; 

app.controller("SearchCtrl", function($scope, tmdbService){
    $scope.enterPush = (e) => {
        if (e.keyCode === 13) {
            tmdbService.searchMovies(e.target.value).then((results) => {
                console.log(results.data.results);
            }).catch((err) => {
                console.log(err); 
            });
        }
    }; 
}); 