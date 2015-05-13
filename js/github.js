/**
 * Created by Robert on 12/05/2015.
 */
(function () {
    "use strict";
    var github = function ($http) {

        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepositories = function (repositoryUrl) {
            return $http.get(repositoryUrl).then(function (response) {
                return response.data;
            });
        };

        var getContributors = function (url) {
            return $http.get(url).then(function (response) {
                return response.data;
            });
        };

        return {
            getUser: getUser,
            getRepositories: getRepositories,
            getContributors: getContributors
        };
    };

    var app = angular.module('githubBrowser');
    app.factory("github", github);

}());

