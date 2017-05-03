angular.module('app').controller('d3Ctrl',['$scope','$state','$stateParams',
	function($scope,$state,$stateParams){
		$scope.param=$stateParams.param;
}]);