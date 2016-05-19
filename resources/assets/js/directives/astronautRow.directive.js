app.directive('astronautRow', function() {
    var controller = ['$rootScope', 'AstronautService', function($rootScope, AstronautService) {
        var vm = this;

        vm.delete = function() {
            if (confirm('Are you sure you want to delete this record?')) {
                AstronautService.destroy(vm.astronaut.id)
                .then(function (data) {
                    delete vm.astronaut;
                    $rootScope.$broadcast('reloadAstronauts');
                });
            }
        }
    }];

    return {
        restrict: 'EA',
        replace: true,
        scope: true,
        bindToController: {
            astronaut: '=data'
        },
        controller: controller,
        templateUrl: 'views/astronautRow.html',
        controllerAs: 'ar'
    };
});
