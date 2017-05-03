angular.module('app').config(['$ocLazyLoadProvider', 
	function($ocLazyLoadProvider){
		$ocLazyLoadProvider.config({
			      debug:false,
          	events:true,
          	modules: 
          	[ 
          		{
                  name: 'ui.select',
                  files: 
                  	[
                  	'js/vendor/component/ui-select/select.min.js',
                  	'js/vendor/component/ui-select/select.min.css'
                  	]
             	},
             ]
		})
	}])