app.directive('astronautList', function() {
    var controller = ['$rootScope', 'AstronautService', function($rootScope, AstronautService) {
        var vm = this;

        vm.astronauts = [];
        vm.loading = false;

        vm.sortType = 'id';
        vm.sortReverse = true;

        vm.loadAstronauts = function() {
            vm.loading = true;

            AstronautService.get()
            .then(function(data) {
                vm.astronauts = data.data;
                vm.loading = false;
            })
        }

        vm.sort = function(attribute) {
            vm.sortType = attribute;
            vm.sortReverse = !vm.sortReverse;
            console.log(vm.sortType);
        }

        $rootScope.$on('reloadAstronauts', function() {
            vm.loadAstronauts();
        });

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
