"use strict";angular.module("app").controllerProvider.register("CheckFactoryDialogCtrl",["$scope","$rootScope","device","cpe",function($scope,$rootScope,device,cpe){function save(){cpe.SaveConfig(),$scope.closeThisDialog()}$scope.toWizard=function(){window.location.href="/wizard/index-wizard.html"},$scope["continue"]=function(){device.system.changeLang($rootScope.lang).then(save)}}]);