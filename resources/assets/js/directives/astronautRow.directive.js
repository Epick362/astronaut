app.directive('astronautRow', function() {
    var controller = ['AstronautService', function(AstronautService) {
        var vm = this;

        vm.delete = function() {
            if (confirm('Are you sure you want to delete this record?')) {
                AstronautService.destroy(vm.astronaut.id)
                .then(function (data) {
                    delete vm.astronaut;
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
