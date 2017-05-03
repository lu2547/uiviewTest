'use strict';
var app=angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.load',
    'oc.lazyLoad',
    'ui.bootstrap'
])
.config(
    ['$controllerProvider','$compileProvider','$filterProvider','$provide',
    function ($controllerProvider,$compileProvider,$filterProvider,$provide) {
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])

angular.module('app').config(function($httpProvider){
    $httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
  $httpProvider.defaults.transformRequest = [function (data) {
      var param = function (obj) {
      var query = '';
      var name, value, fullSubName, subName, subValue, innerObj, i;
      for (name in obj) {
        value = obj[name];
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[]';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = subName;
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '='
            + encodeURIComponent(value) + '&';
        }
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    return angular.isObject(data) && String(data) !== '[object File]'
      ? param(data)
      : data;
  }];
 });



angular.module('app').controller('AppCtrl',['$rootScope','$scope','$state','$sessionStorage',
  function($rootScope,$scope,$state,$sessionStorage){
    return;
  //路由拦截
    $scope.app={};
    $rootScope.$on('$stateChangeStart',function(event,toState,toParams,fromState,fromParams){
    $scope.app.umid='luy';
      return;
        if(toState.name == 'access.signin') return;
      if(($rootScope.umid === undefined||$rootScope.umid =='') && 
        ($sessionStorage.umid === undefined||$sessionStorage.umid ==''))
      {
            event.preventDefault();
            $state.go('access.signin');
      }
      else
      {
        $scope.app.umid=$sessionStorage.umid;
        return;
      }
    });
}])