/*global angular*/
(function() {
    'use strict';
    angular.module('myApp.controllers', ['myApp.filters']).controller('NgAnimateCtrl', AnimationController)


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
            var arrTodo = vm.inputText.split(',');
            for (var i = 0; i < arrTodo.length; i++) {
                vm.items.push({
                    text: arrTodo[i],
                    completed: false
                });
            }


            vm.inputText = "";
        };
    }


})();