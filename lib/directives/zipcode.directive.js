import angular from 'angular';

function zipcode() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {

            var $input = element.find('input');
            $input.bind('change', function() {
                if ($input.val() == "") {
                    $input.val(0).triggerHandler('input');
                }
            })
        }
    }
}

export default angular.module('directives.zipcode', [])
    .directive('mdZipcode', zipcode)
    .name;