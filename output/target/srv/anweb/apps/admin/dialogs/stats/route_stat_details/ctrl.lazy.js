"use strict";angular.module("app").controllerProvider.register("routeStatDetailsCtrl",function($scope,StatsRoutingUtil){$scope.needTable=StatsRoutingUtil.needTable(),$scope.getHeader=function(){return $scope.ngDialogData.header},$scope.model=$scope.ngDialogData.model});