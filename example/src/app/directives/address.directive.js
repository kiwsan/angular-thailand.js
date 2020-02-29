import angular from 'angular';

function address() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {

            var $mdDistrict = element.find('md-district');
            var $mdAmphoe = element.find('md-amphoe');
            var $mdProvince = element.find('md-province');
            var $mdZipcode = element.find('md-zipcode');
            // set up slider on load
            angular.element(document).ready(function() {

                $mdDistrict = $mdDistrict.find('input');
                $mdAmphoe = $mdAmphoe.find('input');
                $mdProvince = $mdProvince.find('input');
                $mdZipcode = $mdZipcode.find('input');

                $.Thailand({
                    $district: $($mdDistrict),
                    $amphoe: $($mdAmphoe),
                    $province: $($mdProvince),
                    $zipcode: $($mdZipcode),
                });
            });
        }
    }
}

export default angular.module('directives.address', [])
    .directive('mdAddress', address)
    .name;