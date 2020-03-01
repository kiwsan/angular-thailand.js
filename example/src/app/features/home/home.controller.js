export default class HomeController {
    constructor(randomNamesService) {
        this.random = randomNamesService;
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.random.getName();
    }
}

HomeController.$inject = ['randomNamesService'];

angular.element(document).ready(function() {

});