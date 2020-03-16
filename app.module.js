(function() {
    'use strict';

    agGrid.initialiseAgGridWithAngular1(angular);

    angular.module('app', [
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'agGrid'
    ]);
})();