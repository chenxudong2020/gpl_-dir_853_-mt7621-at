"use strict";!function(){angular.module("app").controllerProvider.register("wifiClientMgmCtrl",["$scope","$state","$interval","wifiClientMgmUtil","funcs","ngDialog","translate","devinfo","navigationFilter",function($scope,$state,$interval,util,funcs,ngDialog,translate,devinfo,navFilter){function updateClientsInfo(newInfo){$scope.clients=newInfo}function getImgSignal(signal){var value=parseInt(signal/20);return value||(value="0"),5==value&&(value=4),value?"wifi_"+value+" ":""}function updateClients(){function success(){$scope.clients=getClients(),$scope.overlay.circular.stop(overlayId),overlayId=null}$scope.overlay.circular,overlayId||(overlayId=$scope.overlay.circular.start()),util.updateClients().then(success)}function getClients(){var clients=util.getClients();return navRules.HideWiFiAccessPointBySSID&&(clients=_.filter(clients,function(client){return client.SSID&&!_.contains(navRules.HideWiFiAccessPointBySSID,client.SSID)})),clients}$scope.isActivate=!1,$scope.clients=[],$scope.bandList=[],$scope.getMiniCaption=function(client){return client.Hostname&&""!=client.Hostname?client.Hostname:client.MAC},$scope.getMiniShort=function(client){var result=[];return client.Hostname&&""!=client.Hostname&&result.push(client.MAC),client.SSID&&result.push(client.SSID),client.Band&&$scope.bandList.length>1&&("2.4 GHz"==client.Band&&result.push(translate("24ghz")),"5 GHz"==client.Band&&result.push(translate("5ghz"))),result},$scope.refresh=updateClients,$scope.disconnect=function(items){devinfo.suspend(),overlayId=$scope.overlay.circular.start(),util.disconnect(items).then(updateClients)["finally"](function(){devinfo.resume(),overlayId&&$scope.overlay.circular.stop(overlayId)})},$scope.showAllParams=function(item,id){ngDialog.open({template:"/admin/dialogs/wifi_client_mgm/dialog.tpl.html",controller:"wifiClientMgmDialogCtrl",data:{rule:item,imgSignal:getImgSignal(item.Signal),header:translate("client")+" "+(parseInt(id)+1),id:id}}).closePromise.then(function(){})},$scope.getImgSignal=getImgSignal,$scope.showBand=function(){return $scope.bandList.length>1},$scope.match=function(obj,items){for(var i in items)if(obj.item.MAC==items[i].MAC)return obj.item=items[i],obj.key=i,!0;return!1};var navRules=navFilter.rules(),overlayId=null;!function(){util.pull().then(function(){$scope.clients=getClients(),$scope.bandList.push("2.4GHz"),util.isSupported5G()&&$scope.bandList.push("5GHz"),$scope.$emit("pageload"),$scope.isActivate=!0,util.subsribeClientInfo(updateClientsInfo,$scope)})}()}])}();