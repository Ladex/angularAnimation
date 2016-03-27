/*global angular*/
(function() {
    'use strict';
    angular.module('myApp.controllers', ['myApp.filters'])
        .controller('NgAnimateCtrl', AnimationController)
        .animation('.item', itemAnimation);


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


    function itemAnimation() {
        return {
            enter: function(element, done) {
                element.css({
                    opacity: 0,
                    'margin-left': '-230px'
                });
                element.animate({
                    opacity: 1,
                    'margin-left': 0
                }, 500, done);
            },
            leave: function(element, className, done) {
                element.animate({
                    'opacity': 0,
                    'margin-left': -230
                }, 500, done);
            }
        }
    }
})();