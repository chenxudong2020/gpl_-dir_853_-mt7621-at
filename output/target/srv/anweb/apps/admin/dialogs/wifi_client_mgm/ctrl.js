"use strict";!function(){angular.module("app").controller("wifiClientMgmDialogCtrl",function($scope,wifiClientMgmUtil){function getImgSignal(signal){var value=parseInt(signal/20);return value||(value="0"),5==value&&(value=4),value?"wifi_"+value+" ":""}$scope.client=$scope.ngDialogData.rule,$scope.imgSignal=$scope.ngDialogData.imgSignal;var id=$scope.ngDialogData.id;wifiClientMgmUtil.subsribeClientInfo(function(newInfo,id){$scope.client.RSSI=newInfo[id].RSSI,$scope.imgSignal=getImgSignal(newInfo[id].Signal),$scope.client.Online=newInfo[id].Online,$scope.client.RateDownLink=newInfo[id].RateDownLink,$scope.client.RxBytes=newInfo[id].RxBytes,$scope.client.TxBytes=newInfo[id].TxBytes,$scope.client.Sleep=newInfo[id].Sleep,$scope.client.Mode=newInfo[id].Mode},$scope,id),$scope.ngDialogData.header=$scope.client.Hostname&&""!=$scope.client.Hostname?$scope.client.Hostname:$scope.client.MAC,$scope.isEmpty=function(value){return _.isEmpty(value)}})}();