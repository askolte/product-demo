(function() {
    'use strict';

    angular
        .module('app')
        .config(appConfig);

    appConfig.$inject = ['$locationProvider', '$stateProvider'];
    function appConfig ($locationProvider, $stateProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider.state('app', {
            url: '/',
            templateUrl: 'app.html',
            controllerAs: 'vm',
            controller: function (AppUtilService) {
                let vm = this;
                // redirecting to one of the user management state - overview users state
                AppUtilService.gotoState('USER_MANAGEMENT', 'app.overviewusers');
            }
        });
    }
})();