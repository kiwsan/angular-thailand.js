import angular from 'angular';

function amphoe() {
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

export default angular.module('directives.amphoe', [])
    .directive('mdAmphoe', amphoe)
    .name;