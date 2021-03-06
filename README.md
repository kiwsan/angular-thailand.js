# Angular Thailand.js

Work in progress

Native jquery.Thailand.js for use in [AngularJs](https://angularjs.org/)

[![Build Status](https://travis-ci.org/kiwsan/angular-thailand.js.svg?branch=angularjs)](https://travis-ci.org/kiwsan/angular-thailand.js)

This project fork from 
[jquery.Thailand.js](https://github.com/earthchie/jquery.Thailand.js)

### Example mock from Dribbble

Started this project as a design mock up for Fill in an example
**Design: list your place Mock** - https://dribbble.com/shots/6280948-list-your-place

## Demo
[Example](https://kiwsan.github.io/angular-thailand.js/)

## Screenshort
<img src="https://github.com/kiwsan/angular-thailand.js/blob/angularjs/screenshort.png" alt="Home Screen" width="80%"/>

## Requirement
- angularjs
- jquery
- corejs-typeahead

## Install
You can install this package with npm.

npm
```
$ npm i angularjs-thailand-address
```

Add style sheet:
```
import 'angularjs-thailand-address/angularjs-thailand-address.css'
```

Then add ngThailandAddress as a dependency for your app:
```
angular.module('myApp', [require('ngThailandAddress')]);
```

## How to use

```html
<md-address>

  <label>Address 1</label>
  <input name="address1" ng-model="address.address1" required>

  <label>Address 2 (optional)</label>
  <input name="address2" ng-model="address.address2">

  <md-district>
    <label>District</label>
    <input name="district" ng-model="address.district" required>
  </md-district>

  <md-amphoe>
    <label>Amphoe</label>
    <input name="amphoe" ng-model="address.amphoe" required>
  </md-amphoe>

  <md-province>
    <label>Province</label>
    <input name="province" ng-model="address.province" required>
  </md-province>

  <md-zipcode>
    <label>Zipcode</label>
    <input name="zipcode" ng-model="address.zipcode" required>
  </md-zipcode>

</md-address>
```

## License
- Original : WTFPL 2.0 http://www.wtfpl.net/
- Also MIT (formally)
