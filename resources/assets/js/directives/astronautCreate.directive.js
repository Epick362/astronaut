app.directive('astronautCreate', function() {
    var controller = ['$localStorage', 'toastr', function($localStorage, toastr) {
        var vm = this;

        vm.create = function() {
            if (!vm.astronaut || vm.astronaut.fname == "" || vm.astronaut.lname == "" || vm.astronaut.power == "") {
                toastr.error('Some fields are empty', 'Invalid form');
                return;
            }

            $localStorage.astronauts.unshift(vm.astronaut);

            delete vm.astronaut;
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
