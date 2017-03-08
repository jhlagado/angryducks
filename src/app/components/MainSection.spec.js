import angular from 'angular';
import 'angular-mocks';
import {MainSection} from './MainSection';

describe('MainSection component', () => {

  beforeEach(() => {
    angular
      .module('mainSection', ['app/components/MainSection.html'])
      .component('mainSection', MainSection);
    angular.mock.module('mainSection');
  });

  beforeEach(angular.mock.inject($componentController => {
    component = $componentController('mainSection', {}, {});
  }));

});
