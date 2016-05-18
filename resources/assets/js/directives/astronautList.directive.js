app.directive('astronautList', function() {
    var controller = ['AstronautService', function(AstronautService) {
        var vm = this;

        vm.astronauts = [];
        vm.loading = false;

        vm.loadAstronauts = function() {
            vm.loading = true;

            AstronautService.get()
            .then(function(data) {
                vm.astronauts = data.data;
                vm.loading = false;
            })
        }

        vm.loadAstronauts();
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/astronautList.html',
        controllerAs: 'al'
    };
});
