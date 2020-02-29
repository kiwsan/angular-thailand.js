import angular from 'angular';

function zipcode() {
    return {
        restrict: 'A',
        scope: {
            name: '='
        },
        link: function(scope, element, attrs) {
            // set up slider on load
            angular.element(document).ready(function() {
                $.Thailand({
                    $zipcode: $(element)
                });
            });

            /*element.bind('change', function() {

                console.log(element.val());

                if (element.val() == "") {
                    element.val(0).triggerHandler('input');
                }
            })*/
        }
    }
}

export default angular.module('directives.zipcode', [])
    .directive('zipcode', zipcode)
    .name;