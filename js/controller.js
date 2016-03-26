/*global angular*/
(function() {
    'use strict';
    angular.module('myApp.controllers',['myApp.filters']).controller('NgAnimateCtrl', AnimationController)


    function AnimationController() {
        var vm = this;

        vm.items = [{
            text: "call mum",
            completed: false
        }, {
            text: "do laundry",
            completed: false
        }];

        vm.inputText = "";
        vm.addItem = function() {
            vm.items.push({
                text: vm.inputText,
                completed: false
            });
            
            vm.inputText = "";
        };
    }


})();