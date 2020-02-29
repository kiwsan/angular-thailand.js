class HomeController {
    constructor(private $state: angular.ui.IStateService) {
        'ngInject';
        var $ = require('jquery');
        $('h1').text('new value');
    }
}

export class HomeContainer implements angular.IComponentOptions {
    static selector = 'home';
    static controller = HomeController;
    static template = require('./home.container.html');
}
