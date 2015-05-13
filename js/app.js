/**
 * Created by Robert on 12/05/2015.
 */
(function () {
    "use strict";
    var app = angular.module("githubBrowser", ["ngRoute"]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when("/user/:username", {
                templateUrl: "templates/user.html",
                controller: "UserController"
            })
            .otherwise({redirectTo: "/"});
    });
}());


