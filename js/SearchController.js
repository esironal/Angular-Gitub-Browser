/**
 * Created by Robert on 12/05/2015.
 */
(function () {
    "use strict";
    var SearchController = function ($scope, $location) {

        $scope.fetchUser = function () {
            $location.path("/user/" + $scope.username);

        };
    };

    var app = angular.module("githubBrowser");
    app.controller("SearchController", SearchController);
}());