angular.module('app').controller('d4Ctrl',['$scope','$state','$stateParams',
	function($scope,$state,$stateParams){
		$scope.param=$stateParams.param;
}]);