import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNamesService from '../../services/random-names.service';
import greetingDirective from '../../directives/greeting.directive';
import addressDirective from '../../directives/address.directive';
import amphorDirective from '../../directives/amphoe.directive';
import districtDirective from '../../directives/district.directive';
import provinceDirective from '../../directives/province.directive';
import zipcodeDirective from '../../directives/zipcode.directive';

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