import angular from 'angular';

function province() {
    return {
        restrict: 'A',
        scope: {
            name: '='
        },
        link: function(scope, element, attrs) {
            // set up slider on load
            angular.element(document).ready(function() {
                $.Thailand({
                    $province: $(element)
                });
            });
        }
    }
}

export default angular.module('directives.province', [])
    .directive('province', province)
    .name;