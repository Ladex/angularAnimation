/*global angular*/
(function() {
    'use strict';

    angular.module('myApp.filters', []).filter('active', Active);
    
    function Active(){
         return function(items) {
            var filteredItems = [];
            for (var i = 0; i < items.length; i++) {
                if (!items[i].completed) {
                    filteredItems.push(items[i]);
                }
            }
            
            return filteredItems;
        }
    }
})();