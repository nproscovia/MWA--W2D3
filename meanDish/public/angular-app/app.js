angular.module("meanDishes", ["ngRoute"]).config(config);

function config($routeProvider) {
    $routeProvider.when("/", {
        templateUrl:"angular-app/dish-list/dish-list.html",
        controller:"DishesController",
        controllerAs:"vm"

    }).when("/dishes/:id", {
        templateUrl:"angular-app/dish-display/dish.html",
        controller:"DishController",
        controllerAs:"vm"
    })
}


