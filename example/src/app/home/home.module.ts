import * as angular from 'angular';

import { HomeContainer } from './containers/home/home.container';

import { routing } from './home.routes';
import { AddressForm } from './components/add-address-form/add-address-form.component';

export const moduleName =
    angular.module('application.home', [
        'ui.router'
    ])
        .component(AddressForm.selector, AddressForm)
        .component(HomeContainer.selector, HomeContainer)
        .config(routing)
        .name;
