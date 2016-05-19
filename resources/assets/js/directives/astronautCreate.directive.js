app.directive('astronautCreate', function() {
    var controller = ['$rootScope', 'AstronautService', 'toastr', function($rootScope, AstronautService, toastr) {
        var vm = this;

        vm.loading = false;

        vm.create = function() {
            if (!vm.astronaut || vm.astronaut.fname == "" || vm.astronaut.lname == "" || vm.astronaut.power == "") {
                toastr.error('Some fields are empty', 'Invalid form');
                return;
            }

            vm.loading = true;

            AstronautService.store(vm.astronaut)
            .then(function(data) {
                vm.loading = false;
                toastr.success('Record added');
                $rootScope.$broadcast('reloadAstronauts');
                delete vm.astronaut;
            })
            .catch(function() {
                toastr.error('API Error');
            });
        }

        vm.today = new Date(); // for max
        vm.min = new Date(1900, 1, 1);
    }];

    return {
        restrict: 'EA',
        replace: true,
        controller: controller,
        templateUrl: 'views/astronautCreate.html',
        controllerAs: 'ac'
    };
});
