'use strict';

angular.module('myApp').service('validateresponse', function ($rootScope) {
    return function (res) {
        var data = res.data;

        switch (res.status) {
            case 200:
                return res;
            case 422:
                if (!angular.isUndefined(data)) {
                    $rootScope.errors.setErrorsFrom422(data);
                    return res;
                }
        }
        // how to present this to the ui. may be send the user to an error page???
        console.log('unknown response from server');
        return undefined;
    };
});