const _JQL = require('jqljs');
window.JQL = _JQL;

import addressDirective from './directives/address.directive';
import amphorDirective from './directives/amphoe.directive';
import districtDirective from './directives/district.directive';
import provinceDirective from './directives/province.directive';
import zipcodeDirective from './directives/zipcode.directive';

export default angular.module('ngThailandAddress', [
        addressDirective,
        amphorDirective,
        districtDirective,
        provinceDirective,
        zipcodeDirective
    ])
    .name;