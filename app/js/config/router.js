'use strict';
angular.module('app')
.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/app/index');
		 $stateProvider
    
     .state('app',{
        abstract: true,
        url: '/app',
        templateUrl:'tpl/index/app.html',
      })
	   .state('app.index',{
  		 	url:'/index',
        views:{
          "top":
            {
              templateUrl: 'tpl/index/top.html'
            }, 
          "left":
            {
              templateUrl: 'tpl/index/left.html'
            },
          "main":
            {
              templateUrl:'tpl/index/main.html',
              resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/index/controllers/index_main.js']);
                    }]
                  }
            }
        }
		 })
     .state('app.index.detail1',{
        url:'/detail1',
        templateUrl:'tpl/index/detail/detail1.html'
     })
     .state('app.index.detail2',{
        url:'/detail2',
        templateUrl:'tpl/index/detail/detail2.html'
     })
     .state('app.index.detail3',{
        url:'/detail3/:param',
        templateUrl:'tpl/index/detail/detail3.html',
        resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/index/controllers/detail3.js']);
                    }]
                  }
     })
     .state('app.index.detail4',{
        url:'/detail4/:param',
        templateUrl:'tpl/index/detail/detail4.html',
        resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/index/controllers/detail4.js']);
                    }]
                  }
     })  
}])
.run(
    ['$rootScope','$state','$stateParams',
      function ($rootScope,$state,$stateParams){
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )