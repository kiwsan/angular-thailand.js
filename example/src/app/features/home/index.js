import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNamesService from '../../services/random-names.service';
import greetingDirective from '../../directives/greeting.directive';
import addressDirective from 'angularjs-thailand-address/directives/address.directive';
import amphorDirective from 'angularjs-thailand-address/directives/amphoe.directive';
import districtDirective from 'angularjs-thailand-address/directives/district.directive';
import provinceDirective from 'angularjs-thailand-address/directives/province.directive';
import zipcodeDirective from 'angularjs-thailand-address/directives/zipcode.directive';

import './home.css';

export default angular.module('app.home', [uirouter,
        randomNamesService,
        greetingDirective,
        addressDirective,
        amphorDirective,
        districtDirective,
        zipcodeDirective,
        provinceDirective
    ])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;