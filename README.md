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
<md-address class="row">

  <div class="col-md-12">
    <md-input-container class="md-block" flex-gt-xs>
      <label>Address 1</label>
      <input name="address1" ng-model="address.address1" required>
    </md-input-container>
  </div>

  <div class="col-md-12">
    <md-input-container class="md-block" flex-gt-xs>
      <label>Address 2 (optional)</label>
      <input name="address2" ng-model="address.address2">
    </md-input-container>
  </div>

  <div class="col-md-6">
    <md-district>

      <md-input-container class="md-block" flex-gt-xs>
        <label>District</label>
        <input name="district" ng-model="address.district" required>
      </md-input-container>

    </md-district>
  </div>

  <div class="col-md-6">
    <md-amphoe>

      <md-input-container class="md-block" flex-gt-xs>
        <label>Amphoe</label>
        <input name="amphoe" ng-model="address.amphoe" required>
      </md-input-container>

    </md-amphoe>
  </div>

  <div class="col-md-6">
    <md-province>

      <md-input-container class="md-block" flex-gt-xs>
        <label>Province</label>
        <input name="province" ng-model="address.province" required>
      </md-input-container>

    </md-province>
  </div>

  <div class="col-md-6">
    <md-zipcode>

      <md-input-container class="md-block" flex-gt-xs>
        <label>Zipcode</label>
        <input name="zipcode" ng-model="address.zipcode" required>
      </md-input-container>

    </md-zipcode>
  </div>

</md-address>
```

## License
- Original : WTFPL 2.0 http://www.wtfpl.net/
- Also MIT (formally)
