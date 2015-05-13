/**
 * Created by Robert on 12/05/2015.
 */
(function () {
    "use strict";
    var UserController = function ($scope, $http, $window, github, $log, $routeParams, $location) {
        $scope.Title = "Github Test Api App";
        $scope.username = $routeParams.username;

        function onUserData(data) {
            $scope.user = data;
        }

        function onGetRepositories(data) {
            $scope.repos = data;
        }

        function onCollaborators(data) {
            $scope.collaborators = data;
            $log.info("Number of Collaborators " + data.length);
        }

        function onError(error) {
            $window.alert(error);
            $log.error(error);
        }

        function clearData() {
            $scope.user = null;
            $scope.repos = null;
            $scope.collaborators = null;
        }

        $scope.viewRepositories = function (reposUrl) {
            github.getRepositories(reposUrl).then(onGetRepositories, onError);
        };

        $scope.fetchCollaborators = function (url) {
            github.getContributors(url).then(onCollaborators, onError);
        };

        $scope.navigateToUser = function (login) {
            $location.path("/user/" + login);
        };

        clearData();
        github.getUser($scope.username).then(onUserData, onError);
    };

    var app = angular.module("githubBrowser");
    app.controller("UserController", UserController);
}());