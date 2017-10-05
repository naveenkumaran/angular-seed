'use strict';
angular.module('app').service('singleton', function ($http, validateresponse) {
    return {
        updateSettings: function (data) {
            var url = 'api/dummy';
            return $http({method: 'GET', url: url, params: params}).
            then(validateresponse, validateresponse);
        }
  };
});
