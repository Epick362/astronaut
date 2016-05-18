app.directive('astronautList', function() {
    var controller = ['$localStorage', function($localStorage) {
        var vm = this;

        $localStorage.$default({
            astronauts: [],
        });

        vm.$storage = $localStorage;
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/astronautList.html',
        controllerAs: 'al'
    };
});
