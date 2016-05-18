app.directive('astronautRow', function() {
    var controller = ['$localStorage', function($localStorage) {
        var vm = this;

        vm.delete = function() {
            if (confirm('Are you sure you want to delete this record?')) {
                var index = _.findIndex($localStorage.astronauts, {id: vm.astronaut.id});
                $localStorage.astronauts.splice(index, 1);
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
