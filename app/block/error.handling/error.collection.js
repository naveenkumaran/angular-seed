'use strict';

angular.module('myApp').service('errorcollection', function() {
    var fieldErrors, globalErrors, warnings = [];

    var hasErrors = function () {
        return fieldErrors.length + globalErrors.length > 0;
    };

    /** This does not cause the execution flow to stop as such  */
    var hasWarnings = function(){
        return warnings.length > 0;
    };

    var addFieldError = function (field, error) {
        fieldErrors.push({'field': field, 'errorCode': error});
    };

    /**
     * Check for duplicates before returning. 
     * May be use lodash???
     */
    var getFieldErrors = function(){
        return fieldErrors;
    };

    var clearFieldError = function(){
        fieldErrors = [];
    };


    var addWarning = function(warning){
        warnings.push(warning);
    };

    /**
     * Check for duplicates before returning. 
     * May be use lodash???
     */
    var getWarnings = function(){
        return warnings;
    };

    var clearWarning = function(){
        warnings = [];
    };

    var addGlobalError = function (errors) {
        globalErrors.push(errors);
    };

    /**
     * Check for duplicates before returning. 
     * May be use lodash???
     */
    var getGlobalErrors = function(){
        return globalErrors;
    };

    var clearGlobalError = function(){
        globalErrors = [];
    };

    /** On route transitions invoke this functions */
    var clearErrors = function () {
        clearFieldError();
        clearGlobalError();
    };

    return {
        hasErrors: hasErrors,
        getFieldErrors: getFieldErrors,
        getGlobalErrors: getGlobalErrors,
        addGlobalError: addGlobalError,
        addFieldError: addFieldError,
        hasWarnings: hasWarnings,
        addWarning: addWarning,
        getWarnings: getWarnings,   
        clearFieldError: clearFieldError,
        clearWarning: clearWarning,
        clearGlobalError: clearGlobalError,
        clearErrors: clearErrors,
        setErrorsFrom422: setErrorsFrom422
    };

    var setErrorsFrom422 = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (angular.isDefined(data[i].field)) {
                fieldErrors.push(data[i]);
            } else if (angular.isDefined(data[i])) {
                globalErrors.push(data[i].errorCode);
            }
        }
    };
});