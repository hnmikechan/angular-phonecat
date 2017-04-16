'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        'Hello, {{$ctrl.name}}!' +  //added by Mike
        '<p>Total Number of Phones: {{$ctrl.phones.length}}</p>'  +  //added by Mike
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>' +
        '<table>' +  //added by Mike
            '<tr><th style="border: 1px solid black; padding: 2px;" ng-repeat="j in [0,1,2,3,4,5,6,7]">Row {{j}}</th></tr>' +  //added by Mike
            '<tr ng-repeat="i in [0, 1, 2, 3, 4, 5, 6, 7]">' +  //added by Mike
                '<td style="border: 1px solid black;padding: 2px" ng-repeat="k in [0,1,2,3,4,5,6,7]">{{k}}</td>' +  //added by Mike
            '</tr>' +  //added by Mike
        '</table>',  //added by Mike
    controller: function PhoneListController() {
      
      this.name = 'world'; //added by Mike
        
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
