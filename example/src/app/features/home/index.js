import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import randomNamesService from '../../services/random-names.service';
import greetingDirective from '../../directives/greeting.directive';
import ngThailandAddress from 'angularjs-thailand-address'

import './home.css';

export default angular.module('app.home', [uirouter,
        randomNamesService,
        greetingDirective,
        ngThailandAddress
    ])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;