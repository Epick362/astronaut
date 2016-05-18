app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // For any unmatched url, redirect to /404
    $urlRouterProvider.otherwise('/404');
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
    .state('app', {
        url: '',
        abstract: true,
        template: '<div ui-view=""></div>'
    })
    .state('index', {
        url: '/',
        parent: 'app',
        template: '<astronaut-list></astronaut-list>'
    })
    .state('404', {
        url: '/404',
        parent: 'app',
        templateUrl: 'views/404.html'
    });
});
