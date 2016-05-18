'use strict';

app.service('AstronautService', function($http) {
    this.get = function() {
        return $http.get('api/astronauts');
    }

    this.store = function(astronaut) {
        return $http({
            url: 'api/astronauts',
            method: 'POST',
            data: astronaut
        });
    }

    this.destroy = function(id) {
        return $http({
            url: 'api/astronauts/' + id,
            method: 'DELETE',
        });
    }
});
