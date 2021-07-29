angular.module("meanGames").controller("GamesController", GamesController);

function GamesController(GamesFactory) {
    const vm = this;
    vm.title = "MEAN Games";
    GamesFactory.getAllGames().then(function(response) {
        console.log(response);
        vm.games = response;

       // vm.games = response.data;
    });


   vm.addGame=function(){


    //new game from the form
    const newGame={
        title:vm.newGameTitle,
        price:vm.newGamePrice,
        rate:vm.newGameRating,
        year:vm.newGameYear,
        minPlayers:vm.newGameMinPlayers,
        maxPlayers:vm.newGameMaxPlayers,
        minAge:vm.newGameMinAge,
        designers:vm.newGameDesigner
    };

    if(vm.gameForm.$valid){
        //calling back end to add the game hence call the factory
        GamesFactory.addOneGame(newGame)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
    }
    }
}