export default class HomeController {
    constructor(randomNamesService) {
        this.random = randomNamesService;
        this.name = 'World';

        $.Thailand({
            $district: $('#district'),
            $amphoe: $('#amphoe'),
            $province: $('#province'),
            $zipcode: $('#zipcode'),
        });
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