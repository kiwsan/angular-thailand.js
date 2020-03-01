import angular from 'angular';
import ngMaterial from 'angular-material';
import uirouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';

//import $ from 'jquery';

// shim window namespace so existing app code relying on globals works
//window.jQuery = $;
//window.$ = $;

import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css'
import '../style/app.css';

import routing from './app.config';
import home from './features/home';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, ngMaterial, ngMessages, ngCookies, home])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .config(routing);

export default MODULE_NAME;