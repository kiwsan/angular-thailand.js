import { HomeContainer } from './containers/home/home.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
    'ngInject';
    $stateProvider

        .state('home', {
            parent: 'app',
            url: '/home',
            component: HomeContainer.selector
        });
};
