"use strict";angular.module("wizard").controller("wizardInfoCtrl",["$scope","$rootScope","$state","stepManager",function($scope,$rootScope,$state,stepManager){$rootScope.enableSmallWizard=!1,$scope.customNextStep=function(){stepManager.action("next")},$scope.wizardInfo="dcc_info",$scope.wizardInfoStart="dcc_info_start"}]);