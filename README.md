Work in progress

This project fork from 
[jquery.Thailand.js](https://github.com/earthchie/jquery.Thailand.js)

## Demo
[Example](#)

## Requirement
- angularjs

## Installation
```
$ npm i angularjs-thailand-address
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
